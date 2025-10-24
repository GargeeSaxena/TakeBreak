# Android App Setup Guide

## 📱 Prerequisites

- Android Studio (Arctic Fox or newer)
- Android SDK (API 26 or higher)
- Physical Android device or emulator

## 🚀 Setup Instructions

### 1. Open Project in Android Studio

1. Launch Android Studio
2. Click "Open an existing project"
3. Navigate to `C:\AndroidProjects\TakeBreak\android`
4. Select the `android` folder and click OK

### 2. Gradle Sync

- Android Studio will automatically sync Gradle files
- Wait for the sync to complete (this may take a few minutes on first run)
- If prompted, accept any SDK installation requests

### 3. Run the App

**Option A: Using an Emulator**
1. Click "AVD Manager" in Android Studio toolbar
2. Create a new virtual device if you don't have one
3. Select a device with API 26 or higher
4. Click the Play button (▶️) to run the app

**Option B: Using a Physical Device**
1. Enable Developer Options on your Android device:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
2. Enable USB Debugging:
   - Go to Settings → Developer Options
   - Turn on USB Debugging
3. Connect your device via USB
4. Click the Play button (▶️) and select your device

## 🔔 Permissions

The app will request notification permissions on first run (Android 13+). Make sure to grant these permissions for the app to work properly.

## 🎯 How to Use

1. Launch the TakeBreak app
2. Select your preferred break interval from the dropdown (default: 20 minutes)
3. Tap "Start Timer" to begin receiving break reminders
4. The app will show when your next break is due
5. Tap "Stop Timer" to pause reminders

## 🛠️ Project Structure

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/takebreak/app/
│   │       │   ├── MainActivity.kt
│   │       │   ├── AlarmReceiver.kt
│   │       │   ├── NotificationHelper.kt
│   │       │   └── PreferenceHelper.kt
│   │       ├── res/
│   │       └── AndroidManifest.xml
│   └── build.gradle
├── gradle/
└── build.gradle
```

## 🐛 Troubleshooting

**Build Errors:**
- File → Invalidate Caches → Invalidate and Restart
- Ensure you have the latest Android SDK installed
- Check that Gradle version is compatible

**App Crashes:**
- Check notification permissions are granted
- Verify you're running on Android 8.0+ (API 26+)
- Check logcat for error messages

**Notifications Not Appearing:**
- Check app notification settings in Android Settings
- Ensure "Do Not Disturb" mode is off
- Grant notification permissions when prompted

## 🎨 App Icon

The app currently uses Android's default system icon for quick development. To add custom icons:
- See `ADDING_APP_ICONS.md` for detailed instructions
- Right-click `res` folder → New → Image Asset
- Or use online icon generators

## 📝 Version

Current Version: 0.1.0 (Basic)

## 🔄 Future Features

- User authentication (Supabase)
- Custom break exercises
- Break history tracking
- Cross-device sync with Chrome extension

