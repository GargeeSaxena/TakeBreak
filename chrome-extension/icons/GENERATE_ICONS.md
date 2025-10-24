# How to Generate Icons for TakeBreak Extension

The `icon.svg` file contains the master icon design. You need to convert it to PNG format in three sizes: 16x16, 48x48, and 128x128 pixels.

## Method 1: Using Online Tools (Easiest)

1. Go to https://cloudconvert.com/svg-to-png
2. Upload the `icon.svg` file
3. Set the width to:
   - 16 pixels (for icon-16.png)
   - 48 pixels (for icon-48.png)
   - 128 pixels (for icon-128.png)
4. Download and save each file in this `icons` folder

## Method 2: Using Inkscape (Free Desktop Software)

1. Download and install Inkscape: https://inkscape.org/
2. Open `icon.svg` in Inkscape
3. Go to File > Export PNG Image
4. Set width to 16, export as `icon-16.png`
5. Repeat for 48px and 128px

## Method 3: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
# Navigate to the icons directory
cd chrome-extension/icons

# Convert to different sizes
magick icon.svg -resize 16x16 icon-16.png
magick icon.svg -resize 48x48 icon-48.png
magick icon.svg -resize 128x128 icon-128.png
```

## Method 4: Using Node.js (if you have it installed)

Install sharp package and run:

```bash
npm install sharp
node generate-icons.js
```

(You'll need to create a generate-icons.js script)

## Method 5: Use Figma or Adobe Illustrator

1. Import the SVG into Figma or Illustrator
2. Export as PNG at 16x16, 48x48, and 128x128 sizes

## Expected Files

After generation, you should have:
- `icon-16.png` - 16x16 pixels (for browser toolbar)
- `icon-48.png` - 48x48 pixels (for extension management page)
- `icon-128.png` - 128x128 pixels (for Chrome Web Store)
- `icon.svg` - Master SVG file (already created)

## Quick Online Option

Use this link to convert the SVG quickly:
1. Open icon.svg in a text editor
2. Copy the entire SVG code
3. Go to https://svgtopng.com/
4. Paste the SVG code
5. Download at different sizes

---

**Note:** The extension will still work without icons, but they significantly improve the user experience!

