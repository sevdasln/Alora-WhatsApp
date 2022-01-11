/* Credit goes to BlackAmda*/




const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

 let tk = Config.WORKTYPE == 'public' ? false: true


var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '📣 පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '📣 System stats'

var VER = ''
if (Config.LANG == 'SI') VER = '📲 Version'
if (Config.LANG == 'EN') VER = '📲 Version'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│👸Ｉ ＡＭ A L I V E  \n👸  │╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n├▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜᴏᴜᴛ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\n\nـــ٨ـہہـ♡ـ٨ـہـ'
else MSG = Config.ALIVEMSG


Asena.addCommand({pattern: 'alive', fromMe: tk, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)


    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ǫᴜᴇᴇɴ ᴀʟᴏʀᴀ © ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: 'https://i.ibb.co/xY47y3L/20211210-075024.jpg:   
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Asena.addCommand({pattern: 'qasysstats', fromMe: tk, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Asena.addCommand({pattern: 'qaversion', fromMe: tk, desc: Lang., dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.client.sendMessage(message.jid, 
        `*✨ Alora Version 🎉*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://....../`
   , MessageType.text, {quoted: message.data});
    
}));
