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


// send a buttons message!
const buttons = [
  {buttonId: '.absysdtxt', buttonText: {displayText: SYSDTXT }, type: 1},
  {buttonId: '.abversion', buttonText: {displayText: VER }, type: 1}
]

const buttonMessage = {
    contentText: MSG,
    footerText: '© ǫᴜᴇᴇɴ ᴀʟᴏʀᴀ ᴛᴇꜱᴛ ',
    buttons: buttons,
    headerType: 4,
    
}

const sendMsg = await message.client.sendMessage(message.jid, buttonMessage, MessageType.proto.buttonsMessage.imageMessage:'')

}));

Asena.addCommand({ pattern: 'absysdtxt', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {


await message.client.sendMessage(message.jid, fs.readFileSync("./media/SYSDTXTLOGO.jpg"), MessageType.image, { caption: '````Os:Chromimum\nSsd:256GB SanDisk\nMemory:12GB\nInternet▱\nDOWNLOAD-30mbps\nUPLOAD:-15mbps```'})
}));

Asena.addCommand({ pattern: 'abversion', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {

await message.client.sendMessage(message.jid, fs.readFileSync("./media/VERSLOGO.jpg"), MessageType.image, { caption: '```MS.ALORA V2.2.9```'})
}));

  
