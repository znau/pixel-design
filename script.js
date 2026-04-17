// ==================== 多语言翻译库 ====================
const i18n = {
    zh: {
        appTitle: '🎨 RGB点阵屏设计工具',
        widthLabel: '宽度:',
        heightLabel: '高度:',
        applyBtn: '应用',
        toolsTitle: '工具',
        drawTool: '✏️ 绘制',
        fillTool: '🪣 填充',
        colorPickerTool: '🔍 取色',
        eraserTool: '⬜ 擦除',
        editTitle: '编辑',
        undoBtn: '↶ 撤销',
        redoBtn: '↷ 重做',
        clearBtn: '🗑️ 清空',
        invertBtn: '🔄 反色',
        colorPickerTitle: '颜色选择器',
        colorPickerInput: '点击选择颜色',
        hexLabel: 'HEX:',
        hexPlaceholder: '#RRGGBB',
        rgbLabel: 'RGB:',
        cmykLabel: 'CMYK:',
        quickColorsTitle: '快速颜色',
        recentColorsTitle: '最近使用',
        exportTitle: '导出数据',
        exportJSON: '📋 JSON',
        exportC: '🔧 C数组',
        exportHex: '💾 HEX',
        importBtn: '📥 导入',
        pushDataBtn: '🚀 推送数据',
        helpBtn: '❓ 帮助 & 快捷键',
        importModalTitle: '导入设计数据',
        importPlaceholder: '粘贴JSON或十六进制数据...',
        importConfirm: '导入',
        importCancel: '取消',
        pushModalTitle: '推送数据',
        pushMethodLabel: '推送方式:',
        pushUrlLabel: 'URL地址:',
        pushUrlPlaceholder: 'http://example.com/api',
        pushBtn: '🚀 立即推送',
        closeBtn: '关闭',
        helpTitle: '帮助 & 快捷键说明',
        shortcutsTitle: '⌨️ 快捷键',
        tipsTitle: '💡 使用技巧',
        exportFormatsTitle: '📋 导出数据格式',
        resolutionLabel: '分辨率:',
        pixelsLabel: '填充像素:',
        zoomOut: '缩小',
        zoomIn: '放大',
        zoomReset: '重置',
        sc_undo: '撤销',
        sc_redo: '重做',
        sc_clear: '清空画布',
        sc_invert: '反色',
        sc_eyedropper: '取色器',
        sc_push: '打开推送',
        sc_help: '帮助菜单',
        sc_cancel: '取消填充',
        tip1_title: '绘制工具:',
        tip1_desc: '点击或拖动绘制像素',
        tip2_title: '填充工具:',
        tip2_desc: '点击填充相邻的同色区域，按 Esc 取消',
        tip3_title: '取色器:',
        tip3_desc: '点击任意像素获取其颜色',
        tip4_title: '橡皮擦:',
        tip4_desc: '擦除像素或右键绘制时快速擦除',
        tip5_title: '颜色转换:',
        tip5_desc: '修改 RGB/CMYK/HEX 任意一个会自动更新其他格式',
        tip6_title: '推送功能:',
        tip6_desc: '支持 HTTP POST，可将设计数据发送到 ESP32 或其他服务器',
        tip7_title: '导出格式:',
        tip7_desc: 'JSON (完整结构) / C数组 (RGB565/RGB888) / HEX (十六进制)',
        format1_title: 'JSON:',
        format1_desc: '包含宽度、高度、颜色数据和时间戳的完整数据',
        format2_title: 'C 数组:',
        format2_desc: '可直接复制到 Arduino/ESP32 代码中使用',
        format3_title: '十六进制:',
        format3_desc: '紧凑的十六进制格式便于存储'
    },
    en: {
        appTitle: '🎨 RGB Matrix Design Tool',
        widthLabel: 'Width:',
        heightLabel: 'Height:',
        applyBtn: 'Apply',
        toolsTitle: 'Tools',
        drawTool: '✏️ Draw',
        fillTool: '🪣 Fill',
        colorPickerTool: '🔍 Color',
        eraserTool: '⬜ Erase',
        editTitle: 'Edit',
        undoBtn: '↶ Undo',
        redoBtn: '↷ Redo',
        clearBtn: '🗑️ Clear',
        invertBtn: '🔄 Invert',
        colorPickerTitle: 'Color Picker',
        colorPickerInput: 'Click to select color',
        hexLabel: 'HEX:',
        hexPlaceholder: '#RRGGBB',
        rgbLabel: 'RGB:',
        cmykLabel: 'CMYK:',
        quickColorsTitle: 'Quick Colors',
        recentColorsTitle: 'Recent Colors',
        exportTitle: 'Export Data',
        exportJSON: '📋 JSON',
        exportC: '🔧 C Array',
        exportHex: '💾 HEX',
        importBtn: '📥 Import',
        pushDataBtn: '🚀 Push Data',
        helpBtn: '❓ Help & Shortcuts',
        importModalTitle: 'Import Design Data',
        importPlaceholder: 'Paste JSON or hex data...',
        importConfirm: 'Import',
        importCancel: 'Cancel',
        pushModalTitle: 'Push Data',
        pushMethodLabel: 'Push Method:',
        pushUrlLabel: 'URL Address:',
        pushUrlPlaceholder: 'http://example.com/api',
        pushBtn: '🚀 Push Now',
        closeBtn: 'Close',
        helpTitle: 'Help & Keyboard Shortcuts',
        shortcutsTitle: '⌨️ Keyboard Shortcuts',
        tipsTitle: '💡 Usage Tips',
        exportFormatsTitle: '📋 Export Formats',
        resolutionLabel: 'Resolution:',
        pixelsLabel: 'Filled Pixels:',
        zoomOut: 'Zoom Out',
        zoomIn: 'Zoom In',
        zoomReset: 'Reset',
        sc_undo: 'Undo',
        sc_redo: 'Redo',
        sc_clear: 'Clear Canvas',
        sc_invert: 'Invert Colors',
        sc_eyedropper: 'Color Picker',
        sc_push: 'Open Push',
        sc_help: 'Help Menu',
        sc_cancel: 'Cancel Fill',
        tip1_title: 'Draw Tool:',
        tip1_desc: 'Click or drag to draw pixels',
        tip2_title: 'Fill Tool:',
        tip2_desc: 'Click to fill adjacent same-color areas, press Esc to cancel',
        tip3_title: 'Color Picker:',
        tip3_desc: 'Click any pixel to get its color',
        tip4_title: 'Eraser:',
        tip4_desc: 'Erase pixels or right-click to quick erase while drawing',
        tip5_title: 'Color Conversion:',
        tip5_desc: 'Modify any RGB/CMYK/HEX value and others auto-update',
        tip6_title: 'Push Function:',
        tip6_desc: 'Support HTTP POST to send design data to ESP32 or other servers',
        tip7_title: 'Export Formats:',
        tip7_desc: 'JSON (complete structure) / C Array (RGB565/RGB888) / HEX (hexadecimal)',
        format1_title: 'JSON:',
        format1_desc: 'Complete data with width, height, colors, and timestamp',
        format2_title: 'C Array:',
        format2_desc: 'Directly copy to Arduino/ESP32 code',
        format3_title: 'Hexadecimal:',
        format3_desc: 'Compact hexadecimal format for easy storage'
    }
};

let currentLanguage = localStorage.getItem('appLanguage') || 'en';

function t(key) {
    return i18n[currentLanguage][key] || i18n['en'][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    updateUILanguage();
}

function updateUILanguage() {
    // 更新标题
    document.getElementById('appTitle').textContent = t('appTitle');
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'INPUT') {
            if (el.type === 'button') {
                el.value = t(key);
            } else if (el.type === 'text' || el.type === 'number') {
                el.placeholder = t(key);
            }
        } else if (el.tagName === 'BUTTON') {
            el.textContent = t(key);
        } else if (el.tagName === 'TEXTAREA') {
            el.placeholder = t(key);
        } else {
            el.textContent = t(key);
        }
    });
    
    // 更新帮助菜单中的动态列表
    updateHelpContent();
    
    // 更新语言选择器
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
}

function updateHelpContent() {
    // 更新使用技巧列表
    const tipsList = document.getElementById('tipsList');
    if (tipsList) {
        tipsList.innerHTML = `
            <li><strong>${t('tip1_title')}</strong> ${t('tip1_desc')}</li>
            <li><strong>${t('tip2_title')}</strong> ${t('tip2_desc')}</li>
            <li><strong>${t('tip3_title')}</strong> ${t('tip3_desc')}</li>
            <li><strong>${t('tip4_title')}</strong> ${t('tip4_desc')}</li>
            <li><strong>${t('tip5_title')}</strong> ${t('tip5_desc')}</li>
            <li><strong>${t('tip6_title')}</strong> ${t('tip6_desc')}</li>
            <li><strong>${t('tip7_title')}</strong> ${t('tip7_desc')}</li>
        `;
    }
    
    // 更新导出格式列表
    const formatsList = document.getElementById('formatsList');
    if (formatsList) {
        formatsList.innerHTML = `
            <li><strong>${t('format1_title')}</strong> ${t('format1_desc')}</li>
            <li><strong>${t('format2_title')}</strong> ${t('format2_desc')}</li>
            <li><strong>${t('format3_title')}</strong> ${t('format3_desc')}</li>
        `;
    }
}

// ==================== 数据管理 ====================
class PixelDesigner {
    constructor() {
        this.gridWidth = 8;
        this.gridHeight = 8;
        this.canvas = [];
        this.history = [];
        this.historyIndex = -1;
        this.currentColor = '#FF0000';
        this.recentColors = [];
        this.selectedTool = 'draw';
        this.isDrawing = false;
        this.fillStartPoint = null;

        this.quickColors = [
            '#FF0000', // 红
            '#00FF00', // 绿
            '#0000FF', // 蓝
            '#FFFF00', // 黄
            '#FF00FF', // 紫红
            '#00FFFF', // 青
            '#FFFFFF', // 白
            '#000000'  // 黑
        ];

        this.init();
    }

    init() {
        this.canvas = Array(this.gridHeight)
            .fill(null)
            .map(() => Array(this.gridWidth).fill('#000000'));
        this.history = [];
        this.historyIndex = -1;
        this.recentColors = JSON.parse(localStorage.getItem('recentColors')) || [];
    }

    saveState() {
        // 移除当前索引之后的历史
        this.history = this.history.slice(0, this.historyIndex + 1);
        // 添加新状态
        this.history.push(JSON.parse(JSON.stringify(this.canvas)));
        this.historyIndex++;
        // 限制历史记录数量
        if (this.history.length > 50) {
            this.history.shift();
            this.historyIndex--;
        }
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.canvas = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
            return true;
        }
        return false;
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.canvas = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
            return true;
        }
        return false;
    }

    setPixel(x, y, color) {
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
            this.canvas[y][x] = color;
        }
    }

    getPixel(x, y) {
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
            return this.canvas[y][x];
        }
        return null;
    }

    clear() {
        this.canvas = Array(this.gridHeight)
            .fill(null)
            .map(() => Array(this.gridWidth).fill('#000000'));
    }

    invert() {
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                const hex = this.canvas[y][x].replace('#', '');
                const r = parseInt(hex.substr(0, 2), 16);
                const g = parseInt(hex.substr(2, 2), 16);
                const b = parseInt(hex.substr(4, 2), 16);
                const inverted = '#' + [255 - r, 255 - g, 255 - b]
                    .map(x => x.toString(16).padStart(2, '0').toUpperCase())
                    .join('');
                this.canvas[y][x] = inverted;
            }
        }
    }

    floodFill(startX, startY, newColor) {
        const originalColor = this.getPixel(startX, startY);
        if (originalColor === newColor) return;

        const queue = [[startX, startY]];
        const visited = new Set();
        const key = (x, y) => `${x},${y}`;

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const visitKey = key(x, y);

            if (visited.has(visitKey)) continue;
            visited.add(visitKey);

            if (this.getPixel(x, y) === originalColor) {
                this.setPixel(x, y, newColor);
                queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
            }
        }
    }

    resize(width, height) {
        const newCanvas = Array(height)
            .fill(null)
            .map(() => Array(width).fill('#000000'));

        for (let y = 0; y < Math.min(height, this.gridHeight); y++) {
            for (let x = 0; x < Math.min(width, this.gridWidth); x++) {
                newCanvas[y][x] = this.canvas[y][x];
            }
        }

        this.gridWidth = width;
        this.gridHeight = height;
        this.canvas = newCanvas;
        this.init();
    }

    addRecentColor(color) {
        if (!this.recentColors.includes(color)) {
            this.recentColors.unshift(color);
            if (this.recentColors.length > 8) {
                this.recentColors.pop();
            }
            localStorage.setItem('recentColors', JSON.stringify(this.recentColors));
        }
    }

    exportJSON() {
        return JSON.stringify({
            width: this.gridWidth,
            height: this.gridHeight,
            data: this.canvas,
            exportTime: new Date().toISOString()
        }, null, 2);
    }

    exportCArray() {
        let code = `// RGB点阵屏数据 (${this.gridWidth}x${this.gridHeight})\n`;
        code += `// 导出时间: ${new Date().toLocaleString()}\n\n`;
        code += `const uint16_t pixelData[${this.gridHeight}][${this.gridWidth}] = {\n`;

        for (let y = 0; y < this.gridHeight; y++) {
            code += '    {';
            for (let x = 0; x < this.gridWidth; x++) {
                const color = this.canvas[y][x];
                const rgb565 = this.rgbToRgb565(color);
                code += '0x' + rgb565.padStart(4, '0');
                if (x < this.gridWidth - 1) code += ', ';
            }
            code += '}';
            if (y < this.gridHeight - 1) code += ',';
            code += '\n';
        }

        code += '};\n\n';
        code += `// 或者使用RGB888格式:\n`;
        code += `const uint32_t pixelDataRGB888[${this.gridHeight}][${this.gridWidth}] = {\n`;

        for (let y = 0; y < this.gridHeight; y++) {
            code += '    {';
            for (let x = 0; x < this.gridWidth; x++) {
                const color = this.canvas[y][x];
                const hex = color.replace('#', '');
                code += '0x' + hex;
                if (x < this.gridWidth - 1) code += ', ';
            }
            code += '}';
            if (y < this.gridHeight - 1) code += ',';
            code += '\n';
        }

        code += '};\n';
        return code;
    }

    exportHex() {
        let hex = '';
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                const color = this.canvas[y][x].replace('#', '');
                hex += color;
            }
        }
        return hex;
    }

    rgbToRgb565(hexColor) {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16) >> 3;
        const g = parseInt(hex.substr(2, 2), 16) >> 2;
        const b = parseInt(hex.substr(4, 2), 16) >> 3;
        const rgb565 = (r << 11) | (g << 5) | b;
        return rgb565.toString(16).toUpperCase();
    }

    // 颜色转换工具
    hexToRgb(hex) {
        const cleanHex = hex.replace('#', '').toUpperCase();
        const r = parseInt(cleanHex.substr(0, 2), 16);
        const g = parseInt(cleanHex.substr(2, 2), 16);
        const b = parseInt(cleanHex.substr(4, 2), 16);
        return { r, g, b };
    }

    rgbToHex(r, g, b) {
        return '#' + [r, g, b]
            .map(x => parseInt(x).toString(16).padStart(2, '0').toUpperCase())
            .join('');
    }

    rgbToCmyk(r, g, b) {
        if (r === 0 && g === 0 && b === 0) {
            return { c: 0, m: 0, y: 0, k: 100 };
        }

        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;

        const k = 1 - Math.max(rNorm, gNorm, bNorm);
        const c = ((1 - rNorm - k) / (1 - k)) * 100;
        const m = ((1 - gNorm - k) / (1 - k)) * 100;
        const y = ((1 - bNorm - k) / (1 - k)) * 100;

        return { 
            c: Math.round(c), 
            m: Math.round(m), 
            y: Math.round(y), 
            k: Math.round(k * 100) 
        };
    }

    cmykToRgb(c, m, y, k) {
        const cNorm = c / 100;
        const mNorm = m / 100;
        const yNorm = y / 100;
        const kNorm = k / 100;

        const r = Math.round(255 * (1 - cNorm) * (1 - kNorm));
        const g = Math.round(255 * (1 - mNorm) * (1 - kNorm));
        const b = Math.round(255 * (1 - yNorm) * (1 - kNorm));

        return { r, g, b };
    }

    importJSON(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            this.gridWidth = data.width;
            this.gridHeight = data.height;
            this.canvas = data.data;
            this.init();
            return true;
        } catch (e) {
            console.error('导入失败:', e);
            return false;
        }
    }

    importHex(hexString) {
        try {
            const hex = hexString.trim().toUpperCase();
            const pixelCount = this.gridWidth * this.gridHeight;
            
            if (hex.length !== pixelCount * 6) {
                throw new Error(`十六进制长度错误。应为${pixelCount * 6}，实际${hex.length}`);
            }

            let index = 0;
            for (let y = 0; y < this.gridHeight; y++) {
                for (let x = 0; x < this.gridWidth; x++) {
                    this.canvas[y][x] = '#' + hex.substr(index, 6);
                    index += 6;
                }
            }
            return true;
        } catch (e) {
            console.error('导入失败:', e);
            return false;
        }
    }

    getPixelCount() {
        let count = 0;
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                if (this.canvas[y][x] !== '#000000') {
                    count++;
                }
            }
        }
        return count;
    }
}

// ==================== UI 管理 ====================
class UIManager {
    constructor() {
        this.designer = new PixelDesigner();
        this.initDOM();
        this.bindEvents();
        this.render();
        this.updateQuickColors();
        this.updateRecentColors();
    }

    initDOM() {
        this.gridContainer = document.getElementById('gridContainer');
        this.yAxis = document.getElementById('yAxis');
        this.xAxis = document.getElementById('xAxis');
        this.colorPicker = document.getElementById('colorPicker');
        this.colorDisplay = document.getElementById('colorDisplay');
        
        // HEX输入
        this.hexInput = document.getElementById('hexInput');
        
        // RGB输入
        this.rgbR = document.getElementById('rgbR');
        this.rgbG = document.getElementById('rgbG');
        this.rgbB = document.getElementById('rgbB');
        
        // CMYK输入
        this.cmykC = document.getElementById('cmykC');
        this.cmykM = document.getElementById('cmykM');
        this.cmykY = document.getElementById('cmykY');
        this.cmykK = document.getElementById('cmykK');
        
        this.quickColorsContainer = document.getElementById('quickColors');
        this.recentColorsContainer = document.getElementById('recentColors');
        this.resolutionInfo = document.getElementById('resolutionInfo');
        this.pixelCount = document.getElementById('pixelCount');
        this.totalPixels = document.getElementById('totalPixels');
        this.gridWidthInput = document.getElementById('gridWidth');
        this.gridHeightInput = document.getElementById('gridHeight');
        this.applyGridSizeBtn = document.getElementById('applyGridSize');
        this.importModal = document.getElementById('importModal');
        this.importText = document.getElementById('importText');
        
        // 缩放控件
        this.zoomSlider = document.getElementById('zoomSlider');
        this.zoomValue = document.getElementById('zoomValue');
        this.zoomInBtn = document.getElementById('zoomIn');
        this.zoomOutBtn = document.getElementById('zoomOut');
        this.zoomResetBtn = document.getElementById('zoomReset');
        
        // 模态框
        this.pushModal = document.getElementById('pushModal');
        this.helpModal = document.getElementById('helpModal');
        
        // 推送控件
        this.pushMethod = document.getElementById('pushMethod');
        this.pushUrl = document.getElementById('pushUrl');
        this.pushBtn = document.getElementById('pushBtn');
        this.pushStatus = document.getElementById('pushStatus');
        this.pushDataBtn = document.getElementById('pushDataBtn');
        
        // 帮助按钮
        this.helpBtn = document.getElementById('helpBtn');
        
        // 初始化缩放
        this.currentZoom = 100;
        
        // 从localStorage读取保存的推送URL
        this.pushUrl.value = localStorage.getItem('pushUrl') || '';
        
        // 初始化语言选择器下拉菜单
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = currentLanguage;
            languageSelect.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        }
        
        // 初始化UI语言
        updateUILanguage();
    }

    bindEvents() {
        // 语言选择已在initDOM中处理
        
        // 工具选择
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.designer.selectedTool = btn.dataset.tool;
            });
        });

        // 编辑按钮
        document.getElementById('undoBtn').addEventListener('click', () => this.undo());
        document.getElementById('redoBtn').addEventListener('click', () => this.redo());
        document.getElementById('clearBtn').addEventListener('click', () => this.clear());
        document.getElementById('invertBtn').addEventListener('click', () => this.invert());

        // 颜色选择
        this.colorPicker.addEventListener('input', (e) => {
            this.designer.currentColor = e.target.value;
            this.updateColorDisplay();
            this.designer.addRecentColor(e.target.value);
            this.updateRecentColors();
        });

        // HEX输入
        this.hexInput.addEventListener('change', (e) => {
            let hex = e.target.value.trim().toUpperCase();
            if (!hex.startsWith('#')) hex = '#' + hex;
            if (/^#[0-9A-F]{6}$/.test(hex)) {
                this.designer.currentColor = hex;
                this.colorPicker.value = hex;
                this.updateColorDisplay();
                this.designer.addRecentColor(hex);
                this.updateRecentColors();
            } else {
                alert('HEX格式错误，应为 #RRGGBB');
                this.hexInput.value = this.designer.currentColor.replace('#', '');
            }
        });

        // RGB输入
        const updateFromRGB = () => {
            const r = parseInt(this.rgbR.value) || 0;
            const g = parseInt(this.rgbG.value) || 0;
            const b = parseInt(this.rgbB.value) || 0;
            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                const hex = this.designer.rgbToHex(r, g, b);
                this.designer.currentColor = hex;
                this.colorPicker.value = hex;
                this.updateColorDisplay();
                this.designer.addRecentColor(hex);
                this.updateRecentColors();
            }
        };
        this.rgbR.addEventListener('change', updateFromRGB);
        this.rgbG.addEventListener('change', updateFromRGB);
        this.rgbB.addEventListener('change', updateFromRGB);

        // CMYK输入
        const updateFromCMYK = () => {
            const c = parseInt(this.cmykC.value) || 0;
            const m = parseInt(this.cmykM.value) || 0;
            const y = parseInt(this.cmykY.value) || 0;
            const k = parseInt(this.cmykK.value) || 0;
            if (c >= 0 && c <= 100 && m >= 0 && m <= 100 && 
                y >= 0 && y <= 100 && k >= 0 && k <= 100) {
                const { r, g, b } = this.designer.cmykToRgb(c, m, y, k);
                const hex = this.designer.rgbToHex(r, g, b);
                this.designer.currentColor = hex;
                this.colorPicker.value = hex;
                this.updateColorDisplay();
                this.designer.addRecentColor(hex);
                this.updateRecentColors();
            }
        };
        this.cmykC.addEventListener('change', updateFromCMYK);
        this.cmykM.addEventListener('change', updateFromCMYK);
        this.cmykY.addEventListener('change', updateFromCMYK);
        this.cmykK.addEventListener('change', updateFromCMYK);

        // 网格大小
        this.applyGridSizeBtn.addEventListener('click', () => {
            const width = parseInt(this.gridWidthInput.value);
            const height = parseInt(this.gridHeightInput.value);
            if (width > 0 && width <= 32 && height > 0 && height <= 32) {
                this.designer.resize(width, height);
                this.render();
                this.updateInfo();
            }
        });

        // 缩放控件
        this.zoomSlider.addEventListener('input', (e) => {
            this.setZoom(parseInt(e.target.value));
        });

        this.zoomInBtn.addEventListener('click', () => {
            this.setZoom(Math.min(200, this.currentZoom + 10));
        });

        this.zoomOutBtn.addEventListener('click', () => {
            this.setZoom(Math.max(10, this.currentZoom - 10));
        });

        this.zoomResetBtn.addEventListener('click', () => {
            this.setZoom(100);
        });

        // 推送功能
        this.pushBtn.addEventListener('click', () => this.pushData());
        
        this.pushUrl.addEventListener('change', () => {
            localStorage.setItem('pushUrl', this.pushUrl.value);
        });

        // 导出按钮
        document.getElementById('exportJSON').addEventListener('click', () => this.downloadFile(
            this.designer.exportJSON(),
            'pixel_design.json',
            'application/json'
        ));

        document.getElementById('exportC').addEventListener('click', () => this.downloadFile(
            this.designer.exportCArray(),
            'pixel_design.h',
            'text/plain'
        ));

        document.getElementById('exportHex').addEventListener('click', () => this.downloadFile(
            this.designer.exportHex(),
            'pixel_design.hex',
            'text/plain'
        ));

        document.getElementById('importJSON').addEventListener('click', () => {
            this.importModal.style.display = 'flex';
        });

        // 模态框关闭 - 通用处理
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.dataset.modal;
                if (modalId) {
                    document.getElementById(modalId).style.display = 'none';
                }
            });
        });

        // 导入模态框按钮
        document.getElementById('importCancel').addEventListener('click', () => {
            this.importModal.style.display = 'none';
        });

        document.getElementById('importConfirm').addEventListener('click', () => {
            const text = this.importText.value.trim();
            let success = false;

            // 尝试JSON格式
            try {
                success = this.designer.importJSON(text);
            } catch (e) {
                // 尝试HEX格式
                success = this.designer.importHex(text);
            }

            if (success) {
                this.render();
                this.updateInfo();
                this.importModal.style.display = 'none';
                this.importText.value = '';
                alert('导入成功！');
            } else {
                alert('导入失败，请检查数据格式');
            }
        });

        // 推送数据按钮 - 打开推送弹窗
        this.pushDataBtn.addEventListener('click', () => {
            this.pushModal.style.display = 'flex';
        });

        // 推送弹窗关闭
        document.getElementById('closeModal').addEventListener('click', () => {
            this.pushModal.style.display = 'none';
        });

        // 帮助按钮 - 打开帮助弹窗
        this.helpBtn.addEventListener('click', () => {
            this.helpModal.style.display = 'flex';
        });

        // 帮助弹窗关闭
        document.getElementById('closeHelpModal').addEventListener('click', () => {
            this.helpModal.style.display = 'none';
        });

        // 弹窗外点击关闭
        window.addEventListener('click', (e) => {
            if (e.target === this.importModal) {
                this.importModal.style.display = 'none';
            }
            if (e.target === this.pushModal) {
                this.pushModal.style.display = 'none';
            }
            if (e.target === this.helpModal) {
                this.helpModal.style.display = 'none';
            }
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            // 只处理Ctrl/Cmd组合键快捷键
            if (!(e.ctrlKey || e.metaKey)) {
                return;
            }

            switch (e.key.toUpperCase()) {
                // Ctrl+Z 撤销
                case 'Z':
                    e.preventDefault();
                    this.undo();
                    break;
                // Ctrl+Y 重做
                case 'Y':
                    e.preventDefault();
                    this.redo();
                    break;
                // Ctrl+C 清空画布
                case 'C':
                    e.preventDefault();
                    this.clear();
                    break;
                // Ctrl+I 反色
                case 'I':
                    e.preventDefault();
                    this.invert();
                    break;
                // Ctrl+E 取色器
                case 'E':
                    e.preventDefault();
                    document.querySelector('[data-tool="eyedropper"]').click();
                    break;
                // Ctrl+U 打开推送弹窗
                case 'U':
                    e.preventDefault();
                    this.pushModal.style.display = 'flex';
                    break;
                // Ctrl+H 打开帮助弹窗
                case 'H':
                    e.preventDefault();
                    this.helpModal.style.display = 'flex';
                    break;
            }
        });

        // 取消填充 - Esc键
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.designer.fillStartPoint = null;
            }
        });
    }

    render() {
        this.gridContainer.innerHTML = '';
        const cellSize = this.designer.gridWidth;

        this.gridContainer.style.gridTemplateColumns = `repeat(${this.designer.gridWidth}, 1fr)`;

        for (let y = 0; y < this.designer.gridHeight; y++) {
            for (let x = 0; x < this.designer.gridWidth; x++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.style.backgroundColor = this.designer.canvas[y][x];

                this.attachCellEvents(cell, x, y);
                this.gridContainer.appendChild(cell);
            }
        }

        // 生成坐标轴
        this.renderAxisLabels();
    }

    renderAxisLabels() {
        // 生成Y轴标签
        const yAxis = document.getElementById('yAxis');
        yAxis.innerHTML = '';
        yAxis.style.display = 'flex';
        yAxis.style.flexDirection = 'column';
        yAxis.style.gap = 'var(--grid-gap)';

        for (let y = 0; y < this.designer.gridHeight; y++) {
            const label = document.createElement('div');
            label.className = 'y-axis-label';
            label.textContent = y;
            yAxis.appendChild(label);
        }

        // 生成X轴标签
        const xAxis = document.getElementById('xAxis');
        xAxis.innerHTML = '';
        xAxis.style.display = 'flex';
        xAxis.style.flexDirection = 'row';
        xAxis.style.gap = 'var(--grid-gap)';

        for (let x = 0; x < this.designer.gridWidth; x++) {
            const label = document.createElement('div');
            label.className = 'x-axis-label';
            label.textContent = x;
            xAxis.appendChild(label);
        }
    }

    attachCellEvents(cell, x, y) {
        cell.addEventListener('mousedown', (e) => {
            this.handleCellInteraction(x, y, 'down');
        });

        cell.addEventListener('mouseover', (e) => {
            if (e.buttons === 1 || e.buttons === 2) {
                this.handleCellInteraction(x, y, 'over');
            }
        });

        cell.addEventListener('mouseup', () => {
            this.designer.isDrawing = false;
        });

        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.designer.setPixel(x, y, '#000000');
            this.updateCell(x, y);
        });
    }

    handleCellInteraction(x, y, action) {
        const tool = this.designer.selectedTool;

        if (action === 'down') {
            this.designer.saveState();
            this.designer.isDrawing = true;
        }

        switch (tool) {
            case 'draw':
                this.designer.setPixel(x, y, this.designer.currentColor);
                this.updateCell(x, y);
                break;

            case 'fill':
                this.designer.floodFill(x, y, this.designer.currentColor);
                this.render();
                this.updateInfo();
                break;

            case 'eyedropper':
                const color = this.designer.getPixel(x, y);
                this.designer.currentColor = color;
                this.colorPicker.value = color;
                this.updateColorDisplay();
                this.designer.addRecentColor(color);
                this.updateRecentColors();
                break;

            case 'eraser':
                this.designer.setPixel(x, y, '#000000');
                this.updateCell(x, y);
                break;
        }

        this.updateInfo();
    }

    updateCell(x, y) {
        const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        if (cell) {
            cell.style.backgroundColor = this.designer.canvas[y][x];
        }
    }

    updateColorDisplay() {
        const color = this.designer.currentColor;
        this.colorDisplay.style.backgroundColor = color;
        
        // 更新HEX
        this.hexInput.value = color.replace('#', '');
        
        // 更新RGB
        const rgb = this.designer.hexToRgb(color);
        this.rgbR.value = rgb.r;
        this.rgbG.value = rgb.g;
        this.rgbB.value = rgb.b;
        
        // 更新CMYK
        const cmyk = this.designer.rgbToCmyk(rgb.r, rgb.g, rgb.b);
        this.cmykC.value = cmyk.c;
        this.cmykM.value = cmyk.m;
        this.cmykY.value = cmyk.y;
        this.cmykK.value = cmyk.k;
    }

    updateQuickColors() {
        this.quickColorsContainer.innerHTML = '';
        this.designer.quickColors.forEach(color => {
            const btn = document.createElement('button');
            btn.className = 'color-btn';
            btn.style.backgroundColor = color;
            if (color === this.designer.currentColor) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                this.designer.currentColor = color;
                this.colorPicker.value = color;
                this.updateColorDisplay();
                this.designer.addRecentColor(color);
                this.updateRecentColors();
            });
            this.quickColorsContainer.appendChild(btn);
        });
    }

    updateRecentColors() {
        this.recentColorsContainer.innerHTML = '';
        this.designer.recentColors.forEach(color => {
            const btn = document.createElement('button');
            btn.className = 'color-btn';
            btn.style.backgroundColor = color;
            if (color === this.designer.currentColor) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                this.designer.currentColor = color;
                this.colorPicker.value = color;
                this.updateColorDisplay();
            });
            this.recentColorsContainer.appendChild(btn);
        });
    }

    updateInfo() {
        this.resolutionInfo.textContent = `${this.designer.gridWidth}x${this.designer.gridHeight}`;
        this.pixelCount.textContent = this.designer.getPixelCount();
        this.totalPixels.textContent = this.designer.gridWidth * this.designer.gridHeight;
    }

    undo() {
        if (this.designer.undo()) {
            this.render();
            this.updateInfo();
        }
    }

    redo() {
        if (this.designer.redo()) {
            this.render();
            this.updateInfo();
        }
    }

    clear() {
        if (confirm('确认清空整个画布吗？')) {
            this.designer.saveState();
            this.designer.clear();
            this.render();
            this.updateInfo();
        }
    }

    invert() {
        this.designer.saveState();
        this.designer.invert();
        this.render();
    }

    setZoom(percentage) {
        this.currentZoom = Math.max(10, Math.min(200, percentage));
        this.zoomSlider.value = this.currentZoom;
        this.zoomValue.textContent = this.currentZoom + '%';

        // 计算CSS变量值
        const baseCellSize = 32;
        const newCellSize = Math.round(baseCellSize * this.currentZoom / 100);

        // 应用缩放到CSS
        document.documentElement.style.setProperty('--cell-size', newCellSize + 'px');
    }

    async pushData() {
        const url = this.pushUrl.value.trim();
        const method = this.pushMethod.value;

        if (!url) {
            this.showPushStatus('请输入接收URL', 'error');
            return;
        }

        // 保存URL到localStorage
        localStorage.setItem('pushUrl', url);

        if (method === 'http') {
            await this.pushViaHTTP(url);
        } else if (method === 'websocket') {
            this.showPushStatus('WebSocket功能开发中...', 'loading');
        } else if (method === 'mqtt') {
            this.showPushStatus('MQTT功能开发中...', 'loading');
        }
    }

    async pushViaHTTP(url) {
        try {
            this.pushBtn.disabled = true;
            this.showPushStatus('正在推送数据...', 'loading');

            const jsonData = JSON.parse(this.designer.exportJSON());
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Pixel-Design': 'v1.0'
                },
                body: JSON.stringify(jsonData),
                timeout: 10000
            });

            if (response.ok) {
                const responseData = await response.json().catch(() => ({}));
                const statusText = `✅ 推送成功\n状态码: ${response.status}\n响应: ${JSON.stringify(responseData, null, 2)}`;
                this.showPushStatus(statusText, 'success');
            } else {
                const errorText = await response.text().catch(() => '');
                const statusText = `❌ 推送失败\n状态码: ${response.status}\n响应: ${errorText}`;
                this.showPushStatus(statusText, 'error');
            }
        } catch (error) {
            const errorMsg = `❌ 推送错误\n${error.message || error}`;
            this.showPushStatus(errorMsg, 'error');
        } finally {
            this.pushBtn.disabled = false;
        }
    }

    showPushStatus(message, status) {
        this.pushStatus.textContent = message;
        this.pushStatus.className = 'push-status ' + status;
    }

    downloadFile(content, filename, type) {
        const blob = new Blob([content], { type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UIManager();
});
