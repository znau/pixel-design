# RGB Matrix Design Tool

[English](README.md) | [中文](README_CN.md)

---

A complete web-based RGB matrix design tool supporting real-time editing, multi-format export, and remote data push capabilities.

## ✨ Core Features

### 📐 Grid Editing
- ✅ Support for 1-32x32 pixel resolution
- ✅ Real-time preview
- ✅ Coordinate axis labels (aligned with array indices)
- ✅ Continuous drawing with drag
- ✅ Zoom functionality (10%-200%)

### 🎨 Color Management
- ✅ Powerful color picker
- ✅ RGB/CMYK/HEX display and editing (three formats)
- ✅ 8 quick color presets
- ✅ Recent colors history (auto-saved)
- ✅ One-click hex value copy

### 🛠️ Editing Tools
- ✅ Draw Tool - Pixel-by-pixel drawing
- ✅ Bucket Fill - Photoshop-style flood fill
- ✅ Color Picker - Quick color extraction
- ✅ Eraser - Quick deletion
- ✅ Undo/Redo - 50-step history
- ✅ Clear Canvas - One-click clear
- ✅ Invert Colors - Color inversion

### 📊 Data Export
Supported export formats:
- **JSON Format** - Complete structured data
- **C Array** - Direct ESP32 use (RGB565 and RGB888)
- **Hexadecimal** - Compact format
- **Import** - Load previous designs

### 🚀 Push Functionality
- ✅ **HTTP POST** - Standard HTTP push
- ✅ **Auto-save URL** - Browser remembers recent push addresses
- 🔧 **WebSocket** - Under development
- 📡 **MQTT** - Under development

### 🌍 Multi-Language Support
- ✅ **简体中文** (Chinese Simplified)
- ✅ **English** (American English)
- ✅ **Español** (Spanish)
- Quick switch via buttons in top-right toolbar

### ⌨️ Unified Keyboard Shortcuts
All shortcuts use Ctrl combinations to avoid input conflicts:
- **Ctrl+Z** - Undo
- **Ctrl+Y** - Redo
- **Ctrl+C** - Clear Canvas
- **Ctrl+I** - Invert Colors
- **Ctrl+E** - Color Picker
- **Ctrl+U** - Open Push Dialog
- **Ctrl+H** - Open Help
- **Esc** - Cancel Fill

## 🎯 Quick Start

### Method 1: Direct HTML File

1. Download all files to the same folder
2. Open `index.html` with any modern browser
3. Start designing pixel art

### Method 2: Run Local Test Server (Recommended for push testing)

```bash
# Install dependencies
npm install

# Start server
npm start

# Open browser
http://localhost:8080/api/pixel-design
```

## 📖 Usage Guide

### Basic Editing

1. **Adjust Grid Size**
   - Enter width and height (1-32)
   - Click "Apply" button

2. **Select Color**
   - Use color picker
   - Or input RGB/CMYK/HEX values
   - Or click quick color buttons

3. **Draw Pixels**
   - Select tool (default: Draw)
   - Click or drag on grid
   - Right-click to quick erase

4. **Undo/Redo**
   - Shortcuts: `Ctrl+Z` / `Ctrl+Y`
   - Or use buttons
   - Supports 50 steps history

### Zoom Controls

Use the top zoom controls:
- 🔍− button: Zoom out 10%
- Slider: Precise adjustment
- 🔍+ button: Zoom in 10%
- 🔍↺ button: Reset to 100%

Range: 10% - 200%

### Push Data

Shortcut: Press `Ctrl+U` to open push dialog

1. Select push method (HTTP only currently available)
2. Enter receiver server URL
3. Click "Push Now" to send data
4. View push status feedback

**Example JSON push data:**
```json
{
  "width": 8,
  "height": 8,
  "data": [
    ["#FF0000", "#00FF00", ...],
    ...
  ],
  "exportTime": "2026-04-17T..."
}
```

### Import Design

1. Click "📥 Import" button
2. Paste previously exported JSON or HEX data
3. Click "Import" to load design

### View Help

Shortcut: Press `Ctrl+H` to open help menu

Contains:
- Complete shortcuts list
- Usage tips
- Export format explanation

### Switch Language

Click language buttons in top-right toolbar:
- 中文
- English
- Español

## ⌨️ Complete Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+C` | Clear Canvas |
| `Ctrl+I` | Invert Colors |
| `Ctrl+E` | Open Color Picker |
| `Ctrl+U` | Open Push Data Dialog |
| `Ctrl+H` | Open Help Menu |
| `Esc` | Cancel Fill Operation |

## 🔧 Tech Stack

- **Frontend Framework**: Native HTML5 + CSS3 + JavaScript (no framework dependencies)
- **Storage**: localStorage (color and URL history)
- **Internationalization**: Built-in i18n system
- **Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📁 Project Structure

```
pixelDesign/
├── index.html                # Main HTML file
├── style.css                 # Stylesheet
├── script.js                 # Core script (includes i18n)
├── test-server.js            # Push test server
├── package.json              # Node dependencies
│
├── README.md                 # Chinese documentation
├── README_EN.md              # English documentation (this file)
├── README_ES.md              # Spanish documentation
├── CHANGELOG.md              # Update log
├── CHANGELOG_v1.1.1.md       # Keyboard shortcuts update log
├── QUICK_REFERENCE.md        # Quick reference card
├── UPDATE_SUMMARY.md         # Update summary
│
├── COLOR_GUIDE.md            # Color management guide
├── AXIS_GUIDE.md             # Coordinate axis guide
├── ZOOM_GUIDE.md             # Zoom functionality guide
└── PUSH_GUIDE.md             # Push functionality guide
```

## 🎓 Usage Examples

### Integration with ESP32

**ESP32 side data reception**
```cpp
#include <ArduinoJson.h>

void handlePixelData(String jsonStr) {
    StaticJsonDocument<2048> doc;
    deserializeJson(doc, jsonStr);
    
    int width = doc["width"];
    int height = doc["height"];
    JsonArray data = doc["data"];
    
    // Update display
    for(int y = 0; y < height; y++) {
        for(int x = 0; x < width; x++) {
            String color = data[y][x];
            uint32_t rgb = (uint32_t)strtol(
                color.c_str() + 1, NULL, 16
            );
            setPixel(x, y, rgb);
        }
    }
}
```

**Web server relay (Node.js)**
```javascript
app.post('/api/pixel-design', async (req, res) => {
    const data = req.body;
    
    // Forward to ESP32
    await fetch('http://esp32.local/update', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    
    res.json({ success: true });
});
```

## 📊 Export Data Examples

### C Array Format (RGB565)
```c
const uint16_t pixel_data[] = {
    0x0000, 0xF800, 0x07E0, 0xFFE0,
    ...
};
```

### C Array Format (RGB888)
```c
const uint32_t pixel_data[] = {
    0x000000, 0xFF0000, 0x00FF00, 0xFFFF00,
    ...
};
```

### HEX Format
```
00,FF,07,FE,00,...
```

## 🐛 Troubleshooting

### Push shows CORS error?
Ensure server supports CORS cross-origin requests, or use the provided test-server.js

### Language switching not working?
Clear browser cache or test in another tab

### Data import fails?
Ensure JSON format is correct with width, height, and data fields

## 🚀 Planned Features

- [ ] WebSocket real-time communication
- [ ] MQTT protocol support
- [ ] Layer system
- [ ] Animation frame editing
- [ ] Preset template library
- [ ] More language support

## 💡 Tips & Tricks

1. **Save Workflow**
   - Export JSON backups regularly
   - Use browser bookmarks for quick access

2. **Performance Optimization**
   - Use zoomed-out view for large resolutions
   - Use zoom feature for detailed editing

3. **Internationalization**
   - All text is translatable
   - Shortcuts remain consistent across all languages

## 📞 Support & Feedback

We welcome questions and suggestions!

## 📄 License

MIT License - Free to use and modify

---

**Last Updated**: April 17, 2026  
**Version**: v1.0.0
**Status**: ✅ Production Ready
