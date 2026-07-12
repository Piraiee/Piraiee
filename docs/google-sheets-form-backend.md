# Google Forms Backend

The website sends validated submissions to the Apps Script in `google-apps-script/Code.gs`.

## Destinations

- Spreadsheet: `1GWr646yfRfp77rewL8NBshGlkmWUuESDSrCIVprcoTk`
- Upload folder: `1aj5zMWxmZqSEd94v1sHbqRagO-g6G7p-`
- Notification recipient: `ahmad@piraiee.com`

The script creates one sheet tab per form. Every tab starts with `ID` and `Form name`, followed by submission data. Pitch attachments remain private in the Drive folder and their Drive URL is included in both the sheet and notification email.

## Setup

1. Open the target spreadsheet and choose **Extensions -> Apps Script**.
2. Replace `Code.gs` with the repository copy and enable the `appsscript.json` manifest in project settings before replacing it.
3. Add a script property named `WEBHOOK_SECRET` with a long random value.
4. Deploy as a web app, executing as `ahmad@piraiee.com`, with access set to **Anyone**.
5. Set the deployment URL as the Cloudflare secret `GOOGLE_SCRIPT_URL`.
6. Set the same random value as the Cloudflare secret `GOOGLE_SCRIPT_SECRET`.

The API reports success only when the Apps Script confirms that the row was saved and the email was sent.

The private calendar access code is never included in a submission payload, sheet, log, or email.
