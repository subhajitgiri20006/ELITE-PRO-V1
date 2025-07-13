require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"GG1XRmeq51CSDf4iLlwUeM8OSG8k3Ta6oxT3OAh100o="},"public":{"type":"Buffer","data":"FIB+IiHOwzCiztrbArdzbosMg6fpp8oQlnYMGYzhqn0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"CGKZIyf3wWtpzWvvBcl3ckptgdatU6oZBjmWxFWnOXg="},"public":{"type":"Buffer","data":"pbJjN4xlCHt7u4V8nYKKEhI4VUES/G1BJhkeL/x59VY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uK0zzZ4fybtkJdl9bWeL31RyC/9h2Ay6JKHK/iUe6XM="},"public":{"type":"Buffer","data":"hMolHIw8ROlq1Vxz+VF/RQFGkt15zVgd6Ahf7NRYz0U="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CPn4PjCP5Sqy0L7iVAlPb19AmcVGtsXgNa1kOQlzaXA="},"public":{"type":"Buffer","data":"lr5WVzgoAOtGwn1K9dEvWdbr8skb5A+9vh5HKXTZlS4="}},"signature":{"type":"Buffer","data":"u6m6Yrw5z7HtjRTzM/mUMDICBkvC7NU9lczVF0/bV7G+DjttafRiDxx0tztNX8yZ4CW+j3yhk1DYjBTCy7+pAA=="},"keyId":1},"registrationId":207,"advSecretKey":"V4E32Is8ali6lsAwnUt3xUphhGJTO9p1k6TVc4QYrW4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"Q82G5RAX","me":{"id":"918609223544:22@s.whatsapp.net","name":"PARO","lid":"9814587506907:22@lid"},"account":{"details":"CNLtl4gHEI2Dz8MGGAMgACgA","accountSignatureKey":"lMkgFF7uvOBoDMj5gRB95Od1AYv5SKn0AnVKtGLhWxU=","accountSignature":"+Rpa8ooj9MdIl/yj6gsGLyGQiNE3ZEIJOu6Usdnr0DO9eDIL8XMJlY6q4eRhQKFNtl8+hvA+KjeOJawGZ/ZsAQ==","deviceSignature":"pwgzBa65cEXax5AFRP6obiqn0/41iQTNfA06j8vr4soDl/0N6o+I80v8jtOV5qyL+tJu5T7XNuM4uylWhcC3Bg=="},"signalIdentities":[{"identifier":{"name":"918609223544:22@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZTJIBRe7rzgaAzI+YEQfeTndQGL+Uip9AJ1SrRi4VsV"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAgIDQ=="},"lastAccountSyncTimestamp":1752416657,"lastPropHash":"C4fJN","myAppStateKeyId":"AAAAAARt"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
