# TakeBreak Chrome Extension - Installation Guide

A browser extension that reminds you to take 4-minute health breaks (1 min exercise + 3 min rest) at scheduled intervals to prevent neck and cervical issues.

## 📋 Prerequisites

- **Google Chrome** browser (version 88 or higher)
- OR **Microsoft Edge** (Chromium-based)
- OR any Chromium-based browser

## 🚀 Installation Steps

### Step 1: Download the Extension Files

1. Clone or download this repository
2. Navigate to the `chrome-extension` folder
3. Ensure all files are present:
   - `manifest.json`
   - `popup.html`, `popup.js`, `popup.css`
   - `background.js`
   - `break.html`, `break.js`, `break.css`
   - `exercises-data.js`
   - `icons/` folder (optional but recommended)

### Step 2: Generate Icons (Optional)

The extension works without icons, but they improve the user experience.

1. Navigate to the `icons` folder
2. Follow instructions in `GENERATE_ICONS.md` to create:
   - `icon-16.png` (16x16 pixels)
   - `icon-48.png` (48x48 pixels)
   - `icon-128.png` (128x128 pixels)

**Quick method:** Use https://cloudconvert.com/svg-to-png to convert the provided `icon.svg` file.

### Step 3: Load the Extension in Chrome

1. **Open Chrome Extensions Page**
   - Type `chrome://extensions/` in the address bar
   - OR click the three-dot menu (⋮) → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to and select the `chrome-extension` folder
   - Click "Select Folder"

4. **Verify Installation**
   - You should see "TakeBreak" appear in your extensions list
   - The extension icon should appear in your browser toolbar
   - Status should show "On"

### Step 4: Pin the Extension (Recommended)

1. Click the puzzle piece icon (🧩) in the toolbar
2. Find "TakeBreak" in the list
3. Click the pin icon (📌) next to it
4. The extension icon will now always be visible

## ⚙️ Configuration

### First Time Setup

1. **Click the TakeBreak extension icon** in your toolbar
2. **Set Your Work Hours:**
   - Start Time: When you begin work (e.g., 09:00)
   - End Time: When you finish work (e.g., 23:00)
3. **Choose Break Interval:**
   - 15 minutes
   - 30 minutes (recommended)
   - 45 minutes
   - 60 minutes
4. **Click "Activate Breaks"**

### How It Works

1. **Break Schedule:** The extension schedules breaks at your chosen intervals during work hours
2. **Break Notification:** When it's break time, you'll receive a browser notification
3. **Break Structure:**
   - **Phase 1 (1 minute):** Do a neck/shoulder stretch exercise
   - **Phase 2 (3 minutes):** Step away from your screen and rest
4. **Automatic Reset:** After 4 minutes, the break completes and the next one is scheduled

### Snooze System

- You can snooze up to 3 times (5 minutes each)
- After 3 snoozes, the break becomes mandatory for your health
- Snooze counter resets after each completed break

## 🎯 Usage Tips

### Best Practices

1. **Don't Skip Breaks:** Your body needs regular movement
2. **Actually Move:** Stand up and walk away during the rest phase
3. **Do the Exercises:** The 1-minute stretches are specifically designed for desk workers
4. **Stay Consistent:** Use the extension daily for best results

### Troubleshooting

#### Extension Not Showing Notifications

1. **Check Chrome notification permissions:**
   - Go to `chrome://settings/content/notifications`
   - Ensure notifications are allowed
   - Add your site/extension to the Allow list

2. **Check system notifications:**
   - **Windows:** Settings → System → Notifications
   - **Mac:** System Preferences → Notifications
   - Ensure Chrome is allowed to send notifications

#### Break Times Not Accurate

1. Check your system time is correct
2. Verify work hours are set correctly
3. Deactivate and reactivate the extension

#### Extension Not Loading

1. Ensure all files are present in the folder
2. Check for errors in `chrome://extensions/`
3. Click "Reload" (🔄) button on the extension card
4. Check browser console for errors (F12)

#### Icons Not Appearing

1. Generate PNG icons from the SVG file (see Step 2)
2. Ensure icon files are in the `icons/` folder
3. Reload the extension

## 📱 Additional Features

### Progress Tracking

- View completed breaks count in the popup
- Track your snooze usage
- Monitor your break adherence

### Smart Features

- **Auto-resume:** Extension restarts break schedule after browser restart
- **Work hours respect:** No breaks outside your configured work hours
- **Random exercises:** Different stretches each time
- **Motivational quotes:** Encouragement during breaks

## 🔧 Advanced Configuration

### Modify Break Duration

If you want to customize the break duration, edit `break.js`:

```javascript
const EXERCISE_PHASE_DURATION = 60; // 1 minute in seconds
const REST_PHASE_DURATION = 180; // 3 minutes in seconds
```

### Add Custom Exercises

Edit `exercises-data.js` to add your own exercises:

```javascript
{
  id: 7,
  name: "Your Exercise Name",
  duration: 30,
  instructions: [
    "Step 1",
    "Step 2",
    "Step 3"
  ],
  benefits: "What this exercise does",
  targetArea: "Which body part",
  difficulty: "Easy"
}
```

### Change Break Intervals

To add new interval options, edit `popup.html`:

```html
<option value="20">20 minutes</option>
```

## 🔄 Updating the Extension

1. Download/pull the latest version
2. Go to `chrome://extensions/`
3. Click the reload (🔄) button on the TakeBreak extension
4. Your settings will be preserved

## 🗑️ Uninstallation

1. Go to `chrome://extensions/`
2. Find "TakeBreak"
3. Click "Remove"
4. Confirm removal

Your browser's local storage will be cleared automatically.

## 📝 Privacy & Permissions

### Why We Need These Permissions:

- **alarms:** To schedule break reminders
- **notifications:** To alert you when it's break time
- **storage:** To save your preferences (start time, end time, interval)
- **tabs:** To open the break page in a new tab

### Data Privacy:

- **All data stays local** on your device
- **No data is sent** to external servers
- **No tracking** or analytics
- **No personal information** is collected

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review browser console for errors (F12)
3. Check `chrome://extensions/` for error messages
4. Ensure you're using a Chromium-based browser

## 🎉 You're All Set!

Start taking care of your cervical health today. Your neck and shoulders will thank you!

**Remember:** Consistency is key. Use TakeBreak daily for the best results in preventing desk-related health issues.

---

**Version:** 1.0.0  
**Manifest Version:** 3  
**Compatible with:** Chrome 88+, Edge 88+, and other Chromium browsers

