# Custom CLI Alerts ✨

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/badge/v/custom-cli-alerts)](https://www.npmjs.com/package/custom-cli-alerts)

## 🤔 Why Custom CLI Alerts?

Customization of any kind is great, but customizing CLI UI is just amazing!
I wanted to have something I could use in my project that is easy, has minimal dependencies and can be personalised with colors and emojis:

- 🎨 **Beautiful Output**: Enhances user experience with visually appealing alerts using Catppuccin's color palette
- ⚙️ **Customizable**: Change symbols, colors, and styles per alert or globally
- ✨ **Modern UI**: Powered by Clack for spinners and animations
- 🛡️ **Type-Safe**: Built with TypeScript for reliable development
- 🌐 **Cross-Platform**: Works seamlessly on Windows, MacOS, and Linux
- 🚀 **Zero Configuration**: Works out of the box with sensible defaults

Perfect for CLI tools, dev utilities, and any Node.js application needing that extra touch of polish. 🎉

## 👀 Visual Examples

![custom-cli-alerts](https://i.imgur.com/q0XSivS.png)

### Default Alerts

```typescript
// Success
alert({ type: "success", message: "Task completed!" });

// Info with description
alert({
  type: "info",
  message: "New version available",
  description: "UPDATE",
});

// Warning with spinner
alert({
  type: "warning",
  message: "Processing...",
  description: "LOADING",
});

// Error
alert({
  type: "error",
  message: "Operation failed",
});
```

### Custom Styled Alerts

```typescript
// Custom symbols
configure({
  symbols: {
    success: "🚀",
    info: "💡",
    warning: "⚡",
    error: "💥",
  },
});

// Custom colors
alert({
  type: "info",
  message: "Custom style",
  style: {
    symbol: "⭐",
    color: chalk.hex("#FF69B4"),
  },
});
```

## ✨ Features

🎨 Custom colors and symbols
🌈 Powered by Clack for beautiful UI
⚡ Spinners and animations
🎯 TypeScript support
🔧 Cross-platform (Windows, MacOS, Linux)

## 🚀 Installation

```bash
# with Node
npm install stylish-cli-alerts
# run without Node
npx stylish-cli-alerts
```

## 🎮 Usage

```typescript
typescriptCopyimport alert, { configure } from 'stylish-cli-alerts';

// Basic usage
alert({ type: "success", message: "Task completed!" });

// Custom styling
configure({
symbols: {
success: '🚀',
info: '💡'
}
});

// Per-alert styling
alert({
type: "info",
message: "Custom style",
style: {
symbol: '⭐',
color: chalk.hex('#FF69B4')
}
});
```

## 🛠️ Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Clack](https://img.shields.io/badge/Clack-Beautiful%20Prompts-orange)](https://github.com/natemoo-re/clack)
[![Chalk](https://img.shields.io/badge/Chalk-Terminal%20Styling-green)](https://github.com/chalk/chalk)

## 🎨 Color Palette

Styled with [Catppuccin](https://github.com/catppuccin/catppuccin)'s beautiful palette:

- Success: `#179299` (Teal)
- Error: `#e64553` (Red)
- Info: `#7287fd` (Blue)
- Warning: `#df8e1d` (Yellow)

Special thanks to the [Catppuccin team](https://github.com/catppuccin) for their wonderful color scheme.

## 🤝 Contributing

Fork the Project
Create Feature Branch (git checkout -b feature/amazing)
Commit Changes (git commit -m 'Add feature')
Push Branch (git push origin feature/amazing)
Open Pull Request

## 🙏 Acknowledgments

[![Clack](https://img.shields.io/badge/Clack-Beautiful%20Prompts-orange)](https://github.com/natemoo-re/clack)
[![Chalk](https://img.shields.io/badge/Chalk-Terminal%20Styling-green)](https://github.com/chalk/chalk)

**Special thanks to**:

- [natemoo-re](https://github.com/natemoo-re) for Clack's beautiful prompts
- [chalk](https://github.com/chalk) team for terminal styling
- [Ahmad Awais](https://github.com/ahmadawais) for inspiration from better-cli-alerts
- [Catppuccin](https://github.com/catppuccin) for their beautiful color palette
- All contributors and the open source community

📝 License
MIT License - see LICENSE file

<p align="center">Made with ❤️ by Memnoc</p>
