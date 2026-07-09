# Google Sheets Form Backend

Use this when you are ready to connect the custom website form to a Google Sheet owned by `ahmad@piraiee.com`.

## Sheet

Create a Google Sheet named `piraiee.com Leads` with this header row:

```text
Submitted At | Name | Email | Topic | Message | Source | Page
```

## Apps Script

In the Sheet, open Extensions -> Apps Script and paste:

```js
const SHEET_NAME = "Leads";

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Name", "Email", "Topic", "Message", "Source", "Page"]);
  }

  sheet.appendRow([
    body.submittedAt || new Date().toISOString(),
    body.name || "",
    body.email || "",
    body.topic || "",
    body.message || "",
    body.source || "",
    body.page || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy it as a web app:

- Execute as: `Me`
- Who has access: `Anyone`

Copy the deployment URL and set it in Cloudflare Pages as `GOOGLE_SCRIPT_URL`.

## Optional Spam Protection

Add a Cloudflare Turnstile widget to the form and set `TURNSTILE_SECRET_KEY` in Cloudflare Pages. The server route already verifies `cf-turnstile-response` when the secret is present.
