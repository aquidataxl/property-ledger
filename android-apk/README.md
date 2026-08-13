# Build the Property Ledger Android APK

This is a native Android wrapper for the live Property Ledger website. It opens in its own app window, not Chrome.

## Build it on Windows

1. Install [Android Studio](https://developer.android.com/studio).
2. Open Android Studio → **Open** → select this `android-apk` folder.
3. When prompted, allow Android Studio to install the Android SDK and Gradle files.
4. Select **Build** → **Build APK(s)**.
5. Android Studio will show **locate** when complete. The APK will normally be at `app/build/outputs/apk/debug/app-debug.apk`.

## Install it on your phone

1. Copy `app-debug.apk` to your Android phone.
2. Open it in Files and allow installation from that app when Android asks.
3. Select **Install**.

The wrapper always uses `https://aquidataxl.github.io/property-ledger/`, so upload any web-app updates to GitHub first. Records are saved separately inside this app; use Email backup and Import backup to move records between the Android app and your PC.
