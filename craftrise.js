const fs = require('fs');
const crypto = require('crypto');

const AES_KEY = Buffer.from('2640023187059250', 'utf8');
const PREFIX = '3ebi2mclmAM7Ao2';
const SUFFIX = 'KweGTngiZOOj9d6';

function decryptBase64(input) {
    return Buffer.from(input, 'base64').toString('utf8');
}

function decryptAES(base64Input) {
    const encrypted = Buffer.from(base64Input, 'base64');
    const decipher = crypto.createDecipheriv('aes-128-ecb', AES_KEY, null);
    decipher.setAutoPadding(true);
    let decrypted = decipher.update(encrypted, null, 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

function decryptRiseVersion(str) {
    try {
        str = decryptBase64(str);
        str = decryptBase64(str);

        if (!str.startsWith(PREFIX) || !str.endsWith(SUFFIX)) {
            return str;
        }

        const core = str.substring(PREFIX.length, str.length - SUFFIX.length);
        return decryptBase64(core);
    } catch (e) {
        return '';
    }
}

function decryptFinal(encryptedPass) {
    try {
        const aesDecrypted = decryptAES(encryptedPass);
        return decryptRiseVersion(aesDecrypted).split('#')[0];
    } catch {
        return '';
    }
}

exports.set = function (configPath) {
    try {
        if (!fs.existsSync(configPath)) return null;

        const content = fs.readFileSync(configPath, 'utf8');
        const json = JSON.parse(content);

        const username = json.rememberName || '';
        const password = decryptFinal(json.rememberPass || '');

        return { username, password };
    } catch {
        return null;
    }
};
