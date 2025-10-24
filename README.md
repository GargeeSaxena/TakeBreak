# 🧘 TakeBreak - Cervical Health Companion

**Professional break reminder system for desk workers**. Prevent cervical issues with scheduled breaks, guided exercises, and smart snooze management.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Android-green)
![License](https://img.shields.io/badge/license-MIT-orange)

---

## 🎯 Purpose

TakeBreak helps working professionals who spend long hours on laptops/phones prevent **cervical spondylosis** and neck pain through:
- ⏰ Scheduled breaks during work hours
- 🤸 Guided neck & shoulder exercises (1 minute)
- 💪 4-minute structured breaks (1 min exercise + 3 min rest)
- 🔄 Smart snooze system (max 3 times)
- 🚨 Mandatory breaks after excessive snoozing

---

## ✨ Features

### 🌐 Chrome Extension

#### Work Hours Based System
- Set your **start time** (e.g., 9:00 AM)
- Set your **end time** (e.g., 11:00 PM)
- Choose **break interval**: 15, 30, 45, or 60 minutes
- Breaks happen **only during work hours**

#### Scheduled Break Times
- **15 min:** 9:15, 9:30, 9:45, 10:00, 10:15...
- **30 min:** 9:30, 10:00, 10:30, 11:00, 11:30...
- **45 min:** 9:45, 10:30, 11:15, 12:00, 12:45...
- **60 min:** 10:00, 11:00, 12:00, 1:00, 2:00...

#### Smart Break Management
- ✅ **Snooze up to 3 times** (5 minutes each)
- ✅ **Force break** after 3 snoozes (mandatory)
- ✅ **4-minute structured breaks** - Phase 1: 1 min exercise, Phase 2: 3 min rest
- ✅ **Exercise guidance** - 6 neck & shoulder stretches
- ✅ **Motivational system** - encouraging messages
- ✅ **Progress tracking** - breaks completed
- ✅ **Audio notifications** - Sound alerts for phase transitions

### 📱 Android App *(Coming Soon)*

- ✅ **Authentication** - Sign up/in with email & password (Supabase)
- ✅ **Work hours setup** - Same time-based system
- ✅ **All Chrome features** - Exercises, snooze, force breaks
- ✅ **Sign out option**

---

## 🚀 Getting Started

### Chrome Extension

#### Installation:
1. Download/clone this repository
2. Open Chrome → `chrome://extensions/`
3. Enable **"Developer mode"**
4. Click **"Load unpacked"**
5. Select the `chrome-extension` folder
6. Extension ready! 🎉

#### Usage:
1. Click TakeBreak icon in toolbar
2. Set **work hours** (Start: 9:00, End: 23:00)
3. Choose **break interval** (30 min recommended)
4. Click **"Activate Breaks"**
5. Get notified at scheduled times!

#### During Break:
1. **Notification appears** with 2 buttons:
   - ✅ Take Break Now
   - ⏰ Snooze 5 min
2. Click "Take Break Now" → **Full-screen break page** opens
3. Follow the **exercise instructions**
4. Wait **3 minutes** (timer enforced)
5. Feel refreshed! 💚

#### Snooze System:
- **1st snooze:** "Your body can wait a bit! 😊"
- **2nd snooze:** "Remember, your neck needs attention ⏰"
- **3rd snooze:** "Last chance! Next break is mandatory 💪"
- **After 3:** **Force break** - automatically opens, cannot skip easily

---

## 🤸 Exercise Library

### 6 Professional Stretches:

1. **Neck Tilt Stretch** (30s)
   - Relieves lateral neck tension
   - Easy difficulty

2. **Chin Tucks** (20s)
   - Strengthens neck muscles
   - Improves posture

3. **Shoulder Rolls** (30s)
   - Releases shoulder tension
   - Improves circulation

4. **Neck Rotation** (30s)
   - Improves mobility
   - Reduces stiffness

5. **Shoulder Blade Squeeze** (20s)
   - Counteracts hunched posture
   - Targets upper back

6. **Shoulder Shrugs** (20s)
   - Quick tension release
   - Easy to do at desk

*Each exercise includes step-by-step instructions and benefits!*

---

## 🎯 How Break Scheduling Works

### Example: 30-minute intervals, 9:00 AM - 11:00 PM

```
9:00 AM  → Work starts
9:30 AM  → 🔔 First break notification
10:00 AM → 🔔 Second break
10:30 AM → 🔔 Third break
11:00 AM → 🔔 Fourth break
...continues every 30 minutes...
10:30 PM → 🔔 Last break
11:00 PM → Work ends, no more breaks
```

### Example: 15-minute intervals

```
9:00 AM  → Work starts
9:15 AM  → 🔔 Break
9:30 AM  → 🔔 Break
9:45 AM  → 🔔 Break
10:00 AM → 🔔 Break
...continues every 15 minutes...
```

---

## 💪 Health Benefits

### Prevents:
- ❌ Cervical spondylosis
- ❌ Neck stiffness and pain
- ❌ Shoulder tension
- ❌ Eye strain
- ❌ Poor posture
- ❌ Repetitive strain injuries

### Improves:
- ✅ Neck mobility
- ✅ Posture alignment
- ✅ Blood circulation
- ✅ Work focus and productivity
- ✅ Overall wellbeing

---

## 🛠️ Tech Stack

### Chrome Extension:
- **JavaScript** (ES6+, Vanilla)
- **Chrome APIs:** Alarms, Notifications, Storage, Tabs
- **HTML5/CSS3**
- **Manifest V3**

### Android App:
- **Kotlin**
- **Android SDK** (API 26+)
- **Material Design 3**
- **Supabase** (Authentication & Database)
- **WorkManager** (Background tasks)

### Backend:
- **Supabase** (PostgreSQL)
- **Authentication** (Email/Password)
- **Real-time sync** (future)

---

## 📁 Project Structure

```
TakeBreak/
├── chrome-extension/
│   ├── manifest.json           # Extension config
│   ├── popup.html/css/js      # Main UI (work hours input)
│   ├── background.js          # Time-based break scheduler
│   ├── break.html/css/js      # 3-min break page
│   ├── exercises-data.js      # Exercise library
│   └── icons/                 # Extension icons
├── android/
│   ├── app/src/main/
│   │   ├── java/...          # Kotlin source files
│   │   ├── res/              # Layouts & resources
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── shared/
│   ├── exercises.js          # Master exercise database
│   └── supabase-schema.sql   # Database schema
├── README.md
├── GIT_PUSH_INSTRUCTIONS.md
└── .gitignore
```

---

## 🔧 Configuration

### Chrome Extension Settings:
- **Start Time:** When your work day begins (default: 9:00 AM)
- **End Time:** When your work day ends (default: 11:00 PM)
- **Interval:** How often to take breaks (15/30/45/60 min)
- **Snooze Limit:** 3 times maximum
- **Break Duration:** 3 minutes minimum

### Android App Settings:
- Same as Chrome extension
- Plus: Account management (sign in/out)

---

## 📊 Statistics Tracked

- ✅ Total breaks completed
- ✅ Breaks skipped
- ✅ Snooze count (current session)
- ✅ Last break time
- ✅ Compliance rate (future)

---

## 🚨 Important Notes

### Snooze System:
- Use snooze **only when genuinely busy**
- After 3 snoozes, break is **mandatory**
- Protects your health from procrastination
- Fair balance between flexibility and discipline

### Break Duration:
- **Minimum 3 minutes** required
- Based on health research
- Allows time to:
  - Stand up
  - Move away from screen
  - Do 1-2 exercises
  - Let eyes rest
  - Stretch properly

### Skip Option:
- Available but **strongly discouraged**
- Shows warning about cervical health
- Requires confirmation
- Tracked in statistics

---

## 🔄 Future Enhancements

### Phase 3 (v0.3.0):
- [ ] Android app full implementation
- [ ] Supabase authentication working
- [ ] Cross-device settings sync
- [ ] Break history dashboard

### Phase 4 (v0.4.0):
- [ ] More exercises (15+ total)
- [ ] Custom exercise preferences
- [ ] Break streaks & achievements
- [ ] Weekly health reports
- [ ] Dark mode

### Phase 5 (v1.0.0):
- [ ] iOS app
- [ ] Chrome Web Store release
- [ ] Google Play Store release
- [ ] Advanced analytics
- [ ] Integration with health apps

---

## 📖 Documentation

- **Setup Guide:** See individual README files in folders
- **Chrome Extension:** `chrome-extension/SETUP.md`
- **Android App:** `android/SETUP.md`
- **Git Push:** `GIT_PUSH_INSTRUCTIONS.md`
- **Supabase:** `shared/SUPABASE_SETUP.md`

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

See `CONTRIBUTING.md` for guidelines.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 💡 Why TakeBreak?

### The Problem:
Working professionals spend 8-12 hours daily on computers/phones, leading to:
- Chronic neck pain
- Cervical spondylosis
- Poor posture
- Eye strain
- Reduced productivity

### The Solution:
TakeBreak ensures you:
- Take **regular breaks** (scheduled, not random)
- Do **proper exercises** (guided, not guesswork)
- **Actually rest** (3-min minimum, not 10 seconds)
- **Build habits** (smart snooze, not infinite procrastination)
- **Prevent issues** (proactive, not reactive)

---

## 🎯 Target Users

- 💼 Software developers
- 📊 Data analysts
- 🎨 Designers
- ✍️ Content creators
- 📱 Social media managers
- 🎮 Gamers
- 📚 Students (online learning)
- 👨‍💼 Any desk job professional

---

## 📞 Support

- **GitHub Issues:** Report bugs & request features
- **Discussions:** Ask questions
- **Email:** support@takebreak.app (coming soon)

---

## 🎉 Acknowledgments

Built with ❤️ for healthier work habits.

Special thanks to:
- Working professionals suffering from cervical issues
- Health researchers for exercise recommendations
- Open-source community

---

**Current Version:** 0.2.0 (Time-based Break System)  
**Last Updated:** October 2025  
**Status:** ✅ Chrome Extension Complete | 🚧 Android In Progress  

---

<div align="center">
  <strong>⭐ Star this repo if TakeBreak helps you stay healthy! ⭐</strong>
  <br><br>
  <strong>Your health is your wealth. Take your breaks! 💚</strong>
</div>
