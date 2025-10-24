# Chrome Extension Setup Guide

## 📦 Installation

1. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/`
   - Or click the three dots menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to and select the `chrome-extension` folder
   - The TakeBreak extension will appear in your extensions list

4. **Pin the Extension** (Optional)
   - Click the puzzle piece icon in Chrome toolbar
   - Find TakeBreak and click the pin icon
   - The extension icon will appear in your toolbar for easy access

## 🎯 How to Use

1. Click the TakeBreak icon in your toolbar
2. Select your preferred break interval (default: 20 minutes)
3. Click "Start Timer"
4. You'll receive notifications when it's time to take a break!
5. Click "Stop Timer" to pause reminders

## 🔧 Features (v0.1.0)

- ✅ Customizable break intervals (15-60 minutes)
- ✅ Browser notifications
- ✅ Timer persists even when popup is closed
- ✅ Random motivational break messages
- ✅ Works without custom icons (uses Chrome default)

## 🐛 Troubleshooting

**Notifications not showing?**
- Check if Chrome has notification permissions enabled
- Go to Chrome Settings → Privacy and Security → Site Settings → Notifications
- Make sure notifications are allowed

**Extension not loading?**
- Make sure you selected the correct folder (chrome-extension)
- Check the console for any errors in `chrome://extensions/`
- Try reloading the extension

## 📝 Notes

- The timer runs in the background even when you close the popup
- Settings are saved locally in your browser
- The extension uses Chrome's default icon (puzzle piece)
- To add custom icons, see `icons/ICON_GUIDE.md` and update `manifest.json`

