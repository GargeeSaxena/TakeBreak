# Adding Custom App Icons

## ✅ Current Status

The app currently uses Android's **default system icon** (`ic_dialog_info`). This works perfectly for development and testing!

## 🎨 Want to Add Custom Icons Later?

Follow these simple steps when you're ready to add your own branding.

---

## 📱 Method 1: Using Android Studio (Easiest!)

### Step 1: Create Icon Asset
1. In Android Studio, **right-click** on the `res` folder
2. Select **New → Image Asset**
3. A window will open with options

### Step 2: Configure Icon
**Icon Type:** Launcher Icons (Adaptive and Legacy)

**Foreground Layer:**
- **Source Asset Type:** Choose one:
  - **Image:** Upload a PNG/JPG image
  - **Clip Art:** Choose from built-in icons
  - **Text:** Create a text-based icon
  
**Background:**
- Choose a solid color (e.g., `#667eea` - TakeBreak purple)
- Or upload a background image

### Step 3: Generate
1. Click **Next**
2. Preview the icons at different sizes
3. Click **Finish**

### Step 4: Update Manifest
Android Studio should auto-update, but verify `AndroidManifest.xml`:
```xml
<application
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    ...>
```

### Step 5: Clean and Rebuild
- Build → Clean Project
- Build → Rebuild Project
- Run the app!

---

## 🎨 Method 2: Using Online Tools

### Option A: Icon Generator

**1. Create Your Icon Design:**
- Use [Canva.com](https://www.canva.com) or [Figma.com](https://www.figma.com)
- Create 512x512 px image with transparent background
- Design ideas:
  - "TB" text in purple gradient
  - Person stretching emoji 🧘
  - Clock with break symbol

**2. Generate Android Icons:**
- Go to [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
- Or [App Icon Generator](https://www.appicon.co/)
- Upload your 512x512 image
- Download the generated icon pack

**3. Extract to Project:**
- Unzip downloaded files
- Copy all `mipmap-*` folders
- Paste into `android/app/src/main/res/`
- Replace existing folders

**4. Update Manifest:**
Change in `AndroidManifest.xml`:
```xml
<!-- From: -->
android:icon="@android:drawable/ic_dialog_info"

<!-- To: -->
android:icon="@mipmap/ic_launcher"
android:roundIcon="@mipmap/ic_launcher_round"
```

---

## 🎯 Icon Specifications

### Required Sizes (Android)
Android requires icons in multiple densities:

| Folder | Size | DPI |
|--------|------|-----|
| mipmap-mdpi | 48x48 | 160dpi |
| mipmap-hdpi | 72x72 | 240dpi |
| mipmap-xhdpi | 96x96 | 320dpi |
| mipmap-xxhdpi | 144x144 | 480dpi |
| mipmap-xxxhdpi | 192x192 | 640dpi |

**Modern (Adaptive Icons):**
- Foreground: 108x108 dp (safe zone: 66x66 dp)
- Background: 108x108 dp

### Design Guidelines
- **Style:** Simple and recognizable
- **Colors:** #667eea (purple), #764ba2 (deep purple)
- **Format:** PNG with transparency
- **Content:** Centered, avoid text smaller than 8pt

---

## 🚀 Quick Icon Ideas

### 1. Text-Based Icon
- Background: Purple gradient
- Text: "TB" in white, bold
- Simple and professional

### 2. Emoji-Based Icon
- Background: Solid purple
- Emoji: 🧘 (person in lotus position)
- Fun and friendly

### 3. Symbol-Based Icon
- Background: Purple gradient
- Symbol: Clock with pause icon
- Clear purpose indication

### 4. Minimalist Icon
- Background: Gradient (purple to deep purple)
- Shape: Simple circle or rounded square
- Center: Small white break symbol

---

## 📝 Icon Files Structure

After adding icons, your structure should look like:

```
res/
├── mipmap-anydpi-v26/
│   ├── ic_launcher.xml
│   └── ic_launcher_round.xml
├── mipmap-hdpi/
│   ├── ic_launcher.png
│   ├── ic_launcher_foreground.png
│   ├── ic_launcher_round.png
│   └── ic_launcher_background.png
├── mipmap-mdpi/
│   └── (same files as hdpi)
├── mipmap-xhdpi/
│   └── (same files)
├── mipmap-xxhdpi/
│   └── (same files)
└── mipmap-xxxhdpi/
    └── (same files)
```

---

## 🔧 Notification Icon

For the **notification icon**, update `NotificationHelper.kt`:

```kotlin
// Current (using system icon):
.setSmallIcon(android.R.drawable.ic_popup_reminder)

// Change to custom icon:
.setSmallIcon(R.drawable.ic_notification)
```

**Notification Icon Requirements:**
- **Size:** 24x24 dp
- **Style:** White, transparent background
- **Simple:** Single color silhouette
- **Format:** PNG or Vector Drawable (recommended)

Create notification icon:
1. Right-click `res` → New → Image Asset
2. Icon Type: **Notification Icons**
3. Design your icon
4. Click Finish

---

## ✅ Testing Your Icons

After adding icons:

1. **Uninstall old app** from device/emulator (to clear cache)
2. **Clean project:** Build → Clean Project
3. **Rebuild:** Build → Rebuild Project
4. **Install fresh:** Run the app
5. **Check:**
   - Home screen icon
   - App drawer icon
   - Recent apps icon
   - Notification icon

---

## 💡 Pro Tips

1. **Use Vector Drawables** when possible (scales better)
2. **Test on multiple Android versions** (icons look different on Android 8+ with adaptive icons)
3. **Keep it simple** - complex icons don't scale well to small sizes
4. **Follow Material Design** guidelines for best results
5. **Use transparent backgrounds** for flexibility

---

## 📚 Resources

- [Material Design Icons](https://fonts.google.com/icons)
- [Android Icon Design Guidelines](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive)
- [Icon Generator Tools](https://romannurik.github.io/AndroidAssetStudio/)
- [Canva (Free Design Tool)](https://www.canva.com)

---

## 🎉 For Now...

The default Android icon works great! Add custom icons whenever you're ready to polish the app. The functionality is what matters most right now! 🚀


