# 📁 TakeBreak Project Structure

Complete overview of the project organization.

```
TakeBreak/
│
├── 📱 android/                          # Android app (Android Studio project)
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── java/com/takebreak/app/
│   │   │       │   ├── MainActivity.kt           # Main app screen
│   │   │       │   ├── AlarmReceiver.kt          # Handles alarm broadcasts
│   │   │       │   ├── NotificationHelper.kt     # Notification management
│   │   │       │   └── PreferenceHelper.kt       # Local settings storage
│   │   │       ├── res/
│   │   │       │   ├── layout/
│   │   │       │   │   └── activity_main.xml     # Main UI layout
│   │   │       │   ├── values/
│   │   │       │   │   ├── strings.xml           # String resources
│   │   │       │   │   ├── colors.xml            # Color palette
│   │   │       │   │   └── themes.xml            # App theme
│   │   │       │   ├── drawable/
│   │   │       │   │   └── spinner_background.xml
│   │   │       │   └── xml/
│   │   │       │       ├── backup_rules.xml
│   │   │       │       └── data_extraction_rules.xml
│   │   │       └── AndroidManifest.xml           # App configuration
│   │   ├── build.gradle                          # App-level Gradle config
│   │   └── proguard-rules.pro                    # ProGuard rules
│   ├── gradle/
│   │   └── wrapper/
│   │       └── gradle-wrapper.properties         # Gradle wrapper config
│   ├── build.gradle                              # Project-level Gradle
│   ├── settings.gradle                           # Gradle settings
│   ├── gradle.properties                         # Gradle properties
│   └── SETUP.md                                  # Android setup guide
│
├── 🌐 chrome-extension/                  # Chrome extension
│   ├── manifest.json                             # Extension configuration
│   ├── background.js                             # Background service worker
│   ├── popup.html                                # Extension popup UI
│   ├── popup.css                                 # Popup styles
│   ├── popup.js                                  # Popup logic
│   ├── icons/                                    # Extension icons
│   │   └── README.md                             # Icon instructions
│   └── SETUP.md                                  # Extension setup guide
│
├── 🔄 shared/                            # Shared resources
│   ├── supabase-schema.sql                       # Database schema
│   ├── SUPABASE_SETUP.md                         # Supabase guide
│   └── API_DOCS.md                               # API documentation
│
├── 📚 Documentation
│   ├── README.md                                 # Main project README
│   ├── QUICK_START.md                            # Quick start guide
│   ├── PROJECT_STRUCTURE.md                      # This file
│   └── .gitignore                                # Git ignore rules
│
└── 🎯 Root Files
    └── .gitignore                                # Git ignore rules
```

---

## 🎯 Key Components

### Android App (`android/`)
- **Language:** Kotlin
- **Build System:** Gradle
- **UI Framework:** Material Design Components
- **Notifications:** AlarmManager + NotificationCompat
- **Storage:** SharedPreferences

### Chrome Extension (`chrome-extension/`)
- **Language:** JavaScript (Vanilla)
- **Manifest Version:** 3
- **APIs Used:** 
  - `chrome.alarms` - Timer management
  - `chrome.notifications` - Break notifications
  - `chrome.storage.local` - Settings storage
- **Architecture:** Service Worker + Popup

### Shared Resources (`shared/`)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **API:** Future Render deployment
- **Schema:** SQL schema for cross-platform sync

---

## 🔄 Data Flow

### Local (Current Version)
```
User Input → Local Storage → Alarm System → Notifications
```

### Future (With Sync)
```
User Input → Local Storage → Supabase Sync → Other Devices
```

---

## 🛠️ Technology Stack

| Component | Android | Chrome Extension |
|-----------|---------|------------------|
| Language | Kotlin | JavaScript |
| UI | XML + Material | HTML + CSS |
| Storage | SharedPreferences | chrome.storage |
| Timers | AlarmManager | chrome.alarms |
| Notifications | NotificationCompat | chrome.notifications |
| Backend | Supabase (future) | Supabase (future) |

---

## 📦 Dependencies

### Android
- `androidx.core:core-ktx`
- `androidx.appcompat:appcompat`
- `com.google.android.material:material`
- `androidx.constraintlayout:constraintlayout`
- `androidx.work:work-runtime-ktx`

### Chrome Extension
- No external dependencies (Vanilla JS)
- Uses Chrome Extension APIs only

### Future Dependencies
- Supabase JavaScript client
- Supabase Kotlin client (for Android)

---

## 🎨 Design Patterns

### Android
- **MVVM-lite:** Simple view-model separation
- **Helper Pattern:** Notification and Preference helpers
- **Broadcast Receiver:** For alarm handling

### Chrome Extension
- **Message Passing:** popup ↔️ background communication
- **Event-Driven:** Chrome API event listeners
- **MVC-lite:** Simple separation of concerns

---

## 🔐 Security Considerations

### Current Version
- Local storage only (no sensitive data)
- Standard Android permissions
- Chrome extension permissions (minimal)

### Future Version
- Row Level Security (RLS) in Supabase
- JWT-based authentication
- Encrypted data transmission
- API key management via environment variables

---

## 📊 Version Control

### Branches Strategy (Recommended)
- `main` - Stable releases
- `develop` - Active development
- `feature/*` - New features
- `bugfix/*` - Bug fixes

### Ignored Files
- Build artifacts (`/build/`, `/app/build/`)
- IDE files (`.idea/`, `*.iml`)
- Environment variables (`.env`)
- OS files (`.DS_Store`, `Thumbs.db`)

---

## 🚀 Deployment

### Chrome Extension
- Manual: Load unpacked (developer mode)
- Production: Chrome Web Store (future)

### Android App
- Development: Direct install via Android Studio
- Testing: APK distribution
- Production: Google Play Store (future)

### Backend
- Supabase: Cloud-hosted PostgreSQL
- Render: Node.js API (future)

---

## 📈 Scalability

### Current Capacity
- ✅ Single user, local storage
- ✅ Offline-first architecture
- ✅ No server dependencies

### Future Scalability
- Multi-user with Supabase
- Real-time sync across devices
- Analytics and insights
- Third-party integrations

---

## 🧪 Testing Strategy (Future)

### Android
- Unit tests with JUnit
- UI tests with Espresso
- Integration tests

### Chrome Extension
- Jest for unit tests
- Puppeteer for E2E tests
- Manual testing on multiple Chrome versions

### Backend
- Supabase database tests
- API endpoint tests
- Load testing with k6

---

## 📝 Documentation

- `README.md` - Project overview
- `QUICK_START.md` - Getting started guide
- `PROJECT_STRUCTURE.md` - This file
- `android/SETUP.md` - Android-specific setup
- `chrome-extension/SETUP.md` - Extension-specific setup
- `shared/SUPABASE_SETUP.md` - Database setup
- `shared/API_DOCS.md` - API documentation

---

**Last Updated:** Version 0.1.0


