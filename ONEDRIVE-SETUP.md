# Connect Property Ledger to OneDrive

OneDrive synchronisation is now included in the app. It uses Microsoft sign-in and saves one private file called `property-ledger-data.json` in the app's protected OneDrive folder.

## Before you connect

The app must be served from a web address, not opened as a `file:///` page. This is needed for secure Microsoft sign-in on both your PC and phone. A free static host such as GitHub Pages or Azure Static Web Apps is suitable.

## One-time Microsoft setup

1. Go to the [Microsoft Entra admin center](https://entra.microsoft.com/), then **App registrations** → **New registration**.
2. Name it `Property Ledger`.
3. Select **Accounts in any organizational directory and personal Microsoft accounts**.
4. In **Authentication**, add a **Single-page application** redirect URI equal to the exact published app address, for example `https://your-name.github.io/property-ledger/`.
5. In **API permissions** → **Microsoft Graph** → **Delegated permissions**, add `User.Read` and `Files.ReadWrite.AppFolder`.
6. Copy the **Application (client) ID** from the Overview page.

## Connect devices

1. Open the published app on your first device and select **OneDrive sync**.
2. Paste the Application ID, select **Connect OneDrive**, and sign in with your Microsoft account.
3. Select **Upload now** to create the first cloud copy.
4. On your phone or another computer, open the same app address, connect with the same ID and Microsoft account, then select **Download latest** once.

From then on, edits on a signed-in device are automatically uploaded to your private OneDrive app folder. Use **Download latest** when opening the app on another device to load the most recent cloud copy.
