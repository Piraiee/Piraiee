const SPREADSHEET_ID = "1GWr646yfRfp77rewL8NBshGlkmWUuESDSrCIVprcoTk";
const UPLOAD_FOLDER_ID = "1aj5zMWxmZqSEd94v1sHbqRagO-g6G7p-";
const NOTIFICATION_EMAIL = "ahmad@piraiee.com";
const BASE_HEADERS = [
  "ID",
  "Form name",
  "Submitted at",
  "Name",
  "Email",
  "Topic",
  "Message",
  "Source",
  "Page",
  "Attachment name",
  "Attachment URL",
  "Delivery status"
];

function doPost(event) {
  let rowSaved = false;
  let emailSent = false;
  let submissionId = null;

  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    assertWebhookSecret_(payload.webhookSecret);
    delete payload.webhookSecret;

    const formName = normalizeFormName_(payload.formName);
    const fields = sanitizeFields_(payload.fields || {});
    const attachment = saveAttachment_(payload.uploadedFile, formName);
    if (attachment) {
      fields.attachment_name = attachment.name;
      fields.attachment_url = attachment.url;
    }

    submissionId = nextSubmissionId_();
    const row = saveSubmission_(submissionId, formName, payload, fields, attachment);
    rowSaved = true;

    sendNotification_(submissionId, formName, payload, fields, attachment);
    emailSent = true;
    row.sheet.getRange(row.rowNumber, row.deliveryColumn).setValue("Email sent");

    return json_({ ok: true, rowSaved: true, emailSent: true, id: submissionId });
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return json_({
      ok: false,
      rowSaved: rowSaved,
      emailSent: emailSent,
      id: submissionId,
      error: error && error.message ? error.message : "Unknown submission error"
    });
  }
}

function assertWebhookSecret_(providedSecret) {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
  if (!expectedSecret || !providedSecret || !constantTimeEqual_(String(providedSecret), expectedSecret)) {
    throw new Error("Unauthorized webhook request");
  }
}

function normalizeFormName_(value) {
  const allowed = [
    "General Contact",
    "Clarity Session Request",
    "Pitch or Level Up",
    "Mentoring Feedback",
    "Private Calendar Access"
  ];
  const formName = String(value || "");
  if (allowed.indexOf(formName) === -1) throw new Error("Unknown form name");
  return formName;
}

function sanitizeFields_(input) {
  const output = {};
  Object.keys(input).forEach(function (key) {
    if (key === "password" || key === "access_code" || key === "webhookSecret") return;
    const safeKey = String(key).replace(/[^a-zA-Z0-9_ -]/g, "").slice(0, 80);
    if (!safeKey) return;
    output[safeKey] = String(input[key] == null ? "" : input[key]).slice(0, 5000);
  });
  return output;
}

function saveAttachment_(file, formName) {
  if (!file || !file.base64) return null;
  if (formName !== "Pitch or Level Up") throw new Error("Attachments are not allowed for this form");

  const bytes = Utilities.base64Decode(file.base64);
  if (bytes.length > 4 * 1024 * 1024) throw new Error("Attachment exceeds 4MB");

  const folder = DriveApp.getFolderById(UPLOAD_FOLDER_ID);
  const fileName = String(file.name || file.originalName || "attachment").slice(0, 120);
  const blob = Utilities.newBlob(bytes, file.type || "application/octet-stream", fileName);
  const driveFile = folder.createFile(blob);
  driveFile.setDescription("Submitted through piraiee.com - " + formName);

  return {
    name: driveFile.getName(),
    url: driveFile.getUrl(),
    id: driveFile.getId()
  };
}

function saveSubmission_(id, formName, payload, fields, attachment) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(formName) || spreadsheet.insertSheet(formName);
  const dynamicHeaders = Object.keys(fields)
    .filter(function (key) { return key !== "attachment_name" && key !== "attachment_url"; })
    .map(humanize_);
  const headers = ensureHeaders_(sheet, BASE_HEADERS.concat(dynamicHeaders));
  const values = {};

  values["ID"] = id;
  values["Form name"] = formName;
  values["Submitted at"] = payload.submittedAt || new Date().toISOString();
  values["Name"] = payload.name || "";
  values["Email"] = payload.email || "";
  values["Topic"] = payload.topic || "";
  values["Message"] = payload.message || "";
  values["Source"] = payload.source || "";
  values["Page"] = payload.page || "";
  values["Attachment name"] = attachment ? attachment.name : "";
  values["Attachment URL"] = attachment ? attachment.url : "";
  values["Delivery status"] = "Row saved; email pending";

  Object.keys(fields).forEach(function (key) {
    if (key === "attachment_name" || key === "attachment_url") return;
    values[humanize_(key)] = fields[key];
  });

  const rowValues = headers.map(function (header) { return values[header] == null ? "" : values[header]; });
  sheet.appendRow(rowValues);
  const rowNumber = sheet.getLastRow();
  sheet.getRange(rowNumber, 1, 1, headers.length).setWrap(true);

  return {
    sheet: sheet,
    rowNumber: rowNumber,
    deliveryColumn: headers.indexOf("Delivery status") + 1
  };
}

function ensureHeaders_(sheet, requestedHeaders) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  let headers = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0].filter(String)
    : [];

  if (headers.length === 0) headers = BASE_HEADERS.slice();
  requestedHeaders.forEach(function (header) {
    if (headers.indexOf(header) === -1) headers.push(header);
  });

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight("bold")
    .setBackground("#101722")
    .setFontColor("#F4EFE6");
  sheet.autoResizeColumns(1, headers.length);
  return headers;
}

function sendNotification_(id, formName, payload, fields, attachment) {
  const rows = [
    ["Submission ID", id],
    ["Form", formName],
    ["Submitted at", payload.submittedAt || ""],
    ["Name", payload.name || ""],
    ["Email", payload.email || ""],
    ["Topic", payload.topic || ""],
    ["Message", payload.message || ""],
    ["Source", payload.source || ""],
    ["Page", payload.page || ""]
  ];

  Object.keys(fields).forEach(function (key) {
    if (key === "attachment_name" || key === "attachment_url") return;
    rows.push([humanize_(key), fields[key]]);
  });
  if (attachment) {
    rows.push(["Attachment", attachment.name]);
    rows.push(["Drive URL", attachment.url]);
  }

  const htmlRows = rows.map(function (row) {
    const value = row[0] === "Drive URL"
      ? '<a href="' + escapeHtml_(row[1]) + '">' + escapeHtml_(row[1]) + "</a>"
      : escapeHtml_(row[1]);
    return '<tr><th style="text-align:left;vertical-align:top;padding:8px 16px 8px 0;color:#6D727D">' +
      escapeHtml_(row[0]) + '</th><td style="padding:8px 0;color:#101722">' + value + "</td></tr>";
  }).join("");

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    replyTo: payload.email || NOTIFICATION_EMAIL,
    name: "piraiee.com",
    subject: "[piraiee.com] " + formName + " #" + id + " from " + (payload.name || "Unknown sender"),
    body: rows.map(function (row) { return row[0] + ": " + row[1]; }).join("\n"),
    htmlBody: '<div style="font-family:Arial,sans-serif;max-width:720px"><h2 style="color:#0B0D10">' +
      escapeHtml_(formName) + '</h2><table style="border-collapse:collapse;width:100%">' + htmlRows + "</table></div>"
  });
}

function nextSubmissionId_() {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const properties = PropertiesService.getScriptProperties();
    const nextId = Number(properties.getProperty("SUBMISSION_COUNTER") || "0") + 1;
    properties.setProperty("SUBMISSION_COUNTER", String(nextId));
    return nextId;
  } finally {
    lock.releaseLock();
  }
}

function humanize_(value) {
  return String(value)
    .replace(/_/g, " ")
    .replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
}

function constantTimeEqual_(left, right) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}

function escapeHtml_(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
