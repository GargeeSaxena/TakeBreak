# Extension Icons (Optional)

**Good news:** The extension works perfectly without custom icons! Chrome uses a default puzzle piece icon.

## Want Custom Icons? (Optional)

If you want to add custom branding, you'll need to:

### 1. Create Icon Files:
- icon16.png (16x16 pixels)
- icon48.png (48x48 pixels)  
- icon128.png (128x128 pixels)

### 2. Place Them Here:
Put all three PNG files in this folder (`chrome-extension/icons/`)

### 3. Update manifest.json:
Add this section to `manifest.json` after the "action" section:

```json
"action": {
  "default_popup": "popup.html",
  "default_icon": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
},
"icons": {
  "16": "icons/icon16.png",
  "48": "icons/icon48.png",
  "128": "icons/icon128.png"
}
```

### 4. Reload Extension:
Go to `chrome://extensions/` and click the refresh icon on TakeBreak

## Icon Creation Tools:
- [Canva.com](https://www.canva.com) - Free online design tool
- [Favicon.io](https://favicon.io/) - Quick icon generator
- GIMP - Free desktop app

## Design Guidelines:
- **Colors:** #667eea (Purple), #764ba2 (Deep Purple)
- **Ideas:** "TB" text, 🧘 emoji, clock symbol
- **Style:** Simple and recognizable at small sizes

See `ICON_GUIDE.md` in this folder for detailed instructions!

