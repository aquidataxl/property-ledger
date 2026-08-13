# Connect Property Ledger to OneDrive

OneDrive synchronisation saves one private file called `property-ledger-data.json` in the app's protected OneDrive folder.

## One-time Microsoft setup

1. Go to [Microsoft Entra](https://entra.microsoft.com/), then **App registrations** → **New registration**.
2. Name it `Property Ledger`.
3. Select **Accounts in any organizational directory and personal Microsoft accounts**.
4. In **Authentication**, add a **Single-page application** redirect URI: `https://aquidataxl.github.io/property-ledger/`.
5. In **API permissions** → **Microsoft Graph** → **Delegated permissions**, add `User.Read` and `Files.ReadWrite.AppFolder`.
6. Copy the **Application (client) ID** from the Overview page.

## Connect devices

1. Upload the updated `index.html` and `cloud.js` to GitHub and wait for Pages to update.
2. Open `https://aquidataxl.github.io/property-ledger/` and select **OneDrive sync**.
3. Paste the Application ID, select **Connect OneDrive**, and sign in with your Microsoft account.
4. On your first device, select **Upload now**. On every other device, connect with the same ID and account, then select **Download latest** once.

Once connected in a session, edits upload automatically. Reconnect after reopening the app before making changes.
