# Connect Property Ledger to Google Drive

Google Drive synchronisation stores one private `property-ledger-data.json` file in the app's hidden application-data folder. It does not clutter your visible Drive folders.

## One-time Google setup

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create a project called `Property Ledger`.
2. Go to **APIs & Services** → **Library**, find **Google Drive API**, and select **Enable**.
3. Go to **APIs & Services** → **OAuth consent screen**. Select **External**, add your email as a test user, and complete the required app name and contact email fields.
4. Go to **APIs & Services** → **Credentials** → **Create credentials** → **OAuth client ID**.
5. Select **Web application**, name it `Property Ledger Web`, and add this to **Authorized JavaScript origins**: `https://aquidataxl.github.io`.
6. Copy the Client ID, which ends in `.apps.googleusercontent.com`.

## Connect your devices

1. Upload the latest `cloud.js` and `index.html` to your GitHub repository, then wait for GitHub Pages to update.
2. Open `https://aquidataxl.github.io/property-ledger/` and select **Google Drive sync**.
3. Paste the Client ID and select **Connect Google Drive**. Sign in with the Google account you will use for your records.
4. On your first device, choose **Upload now**. On your second device, connect with the same Client ID and Google account, then choose **Download latest** once.

After connecting in a session, edits are uploaded automatically. Google browser tokens expire, so after opening the app again, select **Google Drive sync** and connect before making changes.
