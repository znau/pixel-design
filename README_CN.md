# 🎨 RGB点阵屏设计工具

[中文](README_CN.md) | [English](README.md)

---

# 🎨 RGB点阵屏设计工具

一个功能完整的Web型RGB点阵屏设计工具，支持实时编辑、多格式导出和远程推送。

演示: [https://znau.github.io/pixel-design/index.html](https://znau.github.io/pixel-design/index.html)

## ✨ 核心功能

### 📐 网格编辑
- ✅ 支持1-32x32像素分辨率
- ✅ 实时预览效果
- ✅ 坐标轴标签（符合数组索引）
- ✅ 拖动连续绘制
- ✅ 放大/缩小功能（10%-200%）

### 🎨 颜色管理
- ✅ 强大的颜色选择器
- ✅ RGB/CMYK/HEX三种格式显示和编辑
- ✅ 8个快速颜色预设
- ✅ 最近使用颜色记录（自动保存）
- ✅ 十六进制值一键复制

### 🛠️ 编辑工具
- ✅ 绘制工具 - 逐像素绘制
- ✅ 填充工具 - PS风格洪水填充
- ✅ 取色器 - 快速提取颜色
- ✅ 橡皮擦 - 快速删除
- ✅ 撤销/重做 - 50步历史记录
- ✅ 清空画布 - 一键清空
- ✅ 反色 - 颜色反转

### 📊 数据导出
导出格式支持：
- **JSON格式** - 完整结构化数据
- **C数组** - 直接用于ESP32（RGB565和RGB888两种）
- **十六进制** - 紧凑格式
- **导入功能** - 支持加载之前的设计

### 🚀 推送功能
- ✅ **HTTP POST** - 标准HTTP推送
- ✅ **自动保存URL** - 浏览器记忆最近的推送地址
- 🔧 **WebSocket** - 开发中
- 📡 **MQTT** - 开发中

### 🌍 多语言支持
- ✅ **中文** (简体)
- ✅ **English** (美式英文)
- ✅ **Español** (西班牙语)
- 工具栏右上角快速切换

### ⌨️ 快捷键系统
统一使用Ctrl组合键方式，避免输入冲突：
- **Ctrl+Z** - 撤销
- **Ctrl+Y** - 重做
- **Ctrl+C** - 清空画布
- **Ctrl+I** - 反色
- **Ctrl+E** - 取色器
- **Ctrl+U** - 打开推送
- **Ctrl+H** - 打开帮助
- **Esc** - 取消填充

## 🎯 快速开始

### 方法1: 直接打开HTML文件

1. 下载所有文件到同一文件夹
2. 用任何现代浏览器打开 `index.html`
3. 开始设计像素艺术

### 方法2: 启动本地测试服务器（推荐用于推送功能测试）

```bash
# 安装依赖
npm install

# 启动服务器
npm start

# 打开浏览器访问
http://localhost:8080/api/pixel-design
```

## 📖 使用指南

### 基础编辑

1. **调整网格大小**
   - 输入宽度和高度（1-32）
   - 点击"应用"按钮

2. **选择颜色**
   - 使用颜色选择器
   - 或输入RGB/CMYK/HEX值
   - 或点击快速颜色按钮

3. **绘制像素**
   - 选择工具（默认绘制）
   - 点击或拖动格子
   - 右键快速擦除

4. **撤销/重做**
   - 快捷键：`Ctrl+Z` / `Ctrl+Y`
   - 或点击按钮
   - 支持50步历史

### 放大缩小

使用顶部的缩放控件：
- 🔍− 按钮：缩小10%
- 滑块：精确调节
- 🔍+ 按钮：放大10%
- 🔍↺ 按钮：重置到100%

范围：10% - 200%

### 推送数据

快捷方式：按 `Ctrl+U` 打开推送弹窗

1. 选择推送方式（目前仅HTTP可用）
2. 输入接收服务器的URL
3. 点击"立即推送"发送数据
4. 查看推送状态反馈

**推送的JSON示例：**
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

### 导入设计

1. 点击"📥 导入"按钮
2. 粘贴之前导出的JSON或HEX数据
3. 点击"导入"按钮加载设计

### 查看帮助

快捷方式：按 `Ctrl+H` 打开帮助菜单

包含：
- 完整快捷键列表
- 使用技巧
- 导出格式说明

### 切换语言

点击工具栏右上角的语言按钮：
- 中文
- English
- Español

## ⌨️ 快捷键完整表

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+Z` | 撤销 |
| `Ctrl+Y` | 重做 |
| `Ctrl+C` | 清空画布 |
| `Ctrl+I` | 反色 |
| `Ctrl+E` | 打开取色器 |
| `Ctrl+U` | 打开推送数据弹窗 |
| `Ctrl+H` | 打开帮助菜单 |
| `Esc` | 取消填充操作 |

## 🔧 技术栈

- **前端框架**: 原生HTML5 + CSS3 + JavaScript (无框架依赖)
- **存储**: localStorage（颜色和URL记录）
- **多语言**: 内置i18n国际化系统
- **兼容性**: 所有现代浏览器（Chrome、Firefox、Safari、Edge）

## 📁 项目结构

```
pixelDesign/
├── index.html                # 主HTML文件
├── style.css                 # 样式表
├── script.js                 # 核心脚本（包含i18n）
├── test-server.js            # 推送测试服务器
├── package.json              # Node依赖配置
│
├── README.md                 # 中文说明（本文件）
├── README_EN.md              # 英文说明
├── README_ES.md              # 西班牙语说明
├── CHANGELOG.md              # 更新日志
├── CHANGELOG_v1.1.1.md       # 快捷键更新日志
├── QUICK_REFERENCE.md        # 快速参考卡
├── UPDATE_SUMMARY.md         # 更新总结
│
├── COLOR_GUIDE.md            # 颜色管理文档
├── AXIS_GUIDE.md             # 坐标轴说明
├── ZOOM_GUIDE.md             # 缩放功能说明
└── PUSH_GUIDE.md             # 推送功能指南
```

## 🎓 使用示例

### 与ESP32配合

1. **ESP32端接收数据**
   ```cpp
   #include <ArduinoJson.h>
   
   void handlePixelData(String jsonStr) {
       StaticJsonDocument<2048> doc;
       deserializeJson(doc, jsonStr);
       
       int width = doc["width"];
       int height = doc["height"];
       JsonArray data = doc["data"];
       
       // 更新显示
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

2. **Web服务器中转**
   ```javascript
   // Node.js 接收并转发到ESP32
   app.post('/api/pixel-design', async (req, res) => {
       const data = req.body;
       
       // 转发到ESP32
       await fetch('http://esp32.local/update', {
           method: 'POST',
           body: JSON.stringify(data)
       });
       
       res.json({ success: true });
   });
   ```

## 🐛 问题排查

### 推送显示CORS错误？
确保服务器支持CORS跨域请求，或使用提供的test-server.js

### 语言切换不生效？
清除浏览器缓存或在另一个标签页测试

### 数据导入失败？
确保JSON格式正确，包含width、height、data字段

## 🚀 后续功能规划

- [ ] WebSocket实时通信
- [ ] MQTT协议支持
- [ ] 图层系统
- [ ] 动画帧编辑
- [ ] 预设模板库
- [ ] 更多语言支持

## 💡 小贴士

1. **保存工作流**
   - 定期导出JSON备份
   - 使用浏览器收藏夹快速访问

2. **性能优化**
   - 大分辨率下使用缩小视图概览
   - 使用缩放功能精细编辑

3. **国际化使用**
   - 所有文本都可以翻译
   - 快捷键在所有语言中保持一致

## 📞 支持和反馈

欢迎提交问题和建议！

## 📄 许可证

MIT License - 自由使用和修改

---

**最后更新**: 2026年4月17日  
**版本**: v1.0.0
**状态**: ✅ 生产就绪
