# 🚀 TakeBreak - Quick Start Guide

Get up and running with TakeBreak in just a few minutes!

## 📋 What You'll Need

- **For Chrome Extension:** Google Chrome browser
- **For Android App:** Android Studio & Android device/emulator

---

## 🌐 Chrome Extension Setup (5 minutes)

### Step 1: Load the Extension
1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Navigate to `C:\AndroidProjects\TakeBreak\chrome-extension`
6. Select the folder

### Step 2: Start Using It
1. Click the TakeBreak icon in your Chrome toolbar
2. Select your break interval (default: 20 minutes)
3. Click "Start Timer"
4. Done! You'll get notifications when it's time to stretch

**📖 Detailed Guide:** See `chrome-extension/SETUP.md`

---

## 📱 Android App Setup (10-15 minutes)

### Step 1: Open in Android Studio
1. Launch Android Studio
2. Click "Open an existing project"
3. Navigate to `C:\AndroidProjects\TakeBreak\android`
4. Wait for Gradle sync to complete

### Step 2: Run the App
1. Connect your Android device (or start emulator)
2. Click the Play button (▶️)
3. Grant notification permissions when prompted
4. Select your break interval and tap "Start Timer"

**📖 Detailed Guide:** See `android/SETUP.md`

---

## ✨ Features (Version 0.1.0)

### Chrome Extension
- ✅ Customizable break intervals (15-60 minutes)
- ✅ Browser notifications
- ✅ Timer runs in background
- ✅ Random motivational messages

### Android App
- ✅ Customizable break intervals (15-60 minutes)
- ✅ Push notifications
- ✅ Background alarms
- ✅ Modern Material Design UI

---

## 🎯 How It Works

### Chrome Extension Flow:
```
User sets interval → Starts timer → Chrome Alarms API 
→ Notification at interval → Repeats
```

### Android App Flow:
```
User sets interval → Starts timer → AlarmManager 
→ Notification at interval → Repeats
```

---

## ❓ Common Questions

### "Notifications aren't showing?"
- **Chrome:** Check Chrome notification permissions in Settings
- **Android:** Grant notification permissions when prompted

### "Timer stops when I close the app?"
- **Chrome:** Timer runs in background service worker ✅
- **Android:** Timer uses system AlarmManager ✅

### "Can I sync between devices?"
- Not yet! This is a future feature using Supabase

---

## 🔄 What's Next?

**Phase 1 (Current):** ✅ Basic timer & notifications

**Phase 2 (Coming Soon):**
- User authentication
- Cross-device sync
- Custom break exercises
- Break history

**Phase 3 (Future):**
- Analytics dashboard
- Break recommendations
- Social features
- Integrations (Google Calendar, Slack, etc.)

---

## 🐛 Troubleshooting

### Chrome Extension
| Issue | Solution |
|-------|----------|
| Extension won't load | Check manifest.json for errors |
| No notifications | Enable Chrome notifications |
| Timer not persisting | Check chrome.storage permissions |

### Android App
| Issue | Solution |
|-------|----------|
| Build fails | File → Invalidate Caches → Restart |
| App crashes | Check notification permissions |
| Timer stops | Check battery optimization settings |

---

## 📞 Need Help?

- Chrome Extension: See `chrome-extension/SETUP.md`
- Android App: See `android/SETUP.md`
- Database Schema: See `shared/supabase-schema.sql`

---

## 🎉 You're All Set!

Start taking regular breaks and stay healthy! 💪

Remember: Taking breaks improves productivity, reduces eye strain, and keeps you healthy.


