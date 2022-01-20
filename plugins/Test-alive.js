/*Dont try to copy 💻 Try to make something new*/


const Asena = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');

let tk = Config.WORKTYPE == 'public' ? false: true

Asena.addCommand({ pattern: 'thisisalive', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '✆ පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '✆ System status'

var VER = ''
if (Config.LANG == 'SI') VER = '☩ Version'
if (Config.LANG == 'EN') VER = '☩ Version'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│ 👸🏻Ｉ ＡＭ A L I V E  👸\n│╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n│▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\nـــ٨ـہہـ♡ـ٨ـہـ'
else MSG = Config.ALIVEMSG

//Handlers ^[.!;]
//AmdiHandlers [.!#]

var PREFIXBTN = '';
    if ^[.!;].test(Config.HANDLERS)) {
        PREFIXBTN = Config.HANDLERS.match(^[.!;];
    } else {
        PREFIXBTN = '.';
    }

// send a buttons message!
const buttons = [
  {buttonId: PREFIXBTN + 'absysdtxt', buttonText: {displayText: '✆ System status' }, type: 1},
  {buttonId: PREFIXBTN + 'abversion', buttonText: {displayText: '☩ Version' }, type: 1}
]

const buttonMessage = {
    contentText: '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│ 👸🏻Ｉ ＡＭ A L I V E  👸\n│╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n│▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\nـــ٨ـہہـ♡ـ٨ـہـ',
    footerText: '© ǫᴜᴇᴇɴ ᴀʟᴏʀᴀ ᴛᴇꜱᴛ ',
    buttons: buttons,
    headerType: 1
    
}

await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

Asena.addCommand({ pattern: 'absysdtxt', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {


await message.client.sendMessage(message.jid, fs.readFileSync("./media/SYSDTXTLOGO.jpg"), MessageType.image, { caption: '─▹─═─═─═─═─═─═─═─═─═─▹─\n```▢Name-AloraDev\n▹Os-Selenium\n▹Memory - 16GB\n▹Processor-AMD RYZEN5\n▹Language -English/Sinhala/Azeric/Turkish\n▹Image size-730Mb\n▹Image from -:fusufs/\n▹Wa Web Library - Baileys (^3.5.2)\n▹Whatsapp Ver.-3.3234.9\n▹FrameWork-Node.js/Javascript/Shell\n▹Hosted in-Github\n▹Deployed in-Heroku\n▹Upload Speed-Not Measurable\n▹Download Speed-Not Measurable```\n\n\n➣✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣'})
}));

Asena.addCommand({ pattern: 'abversion', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {

await message.client.sendMessage(message.jid, fs.readFileSync("./media/VERSLOGO.jpg"), MessageType.image, { caption: '```MS.ALORA V2.2.9```'})
}));

  
