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
if (Config.LANG == 'SI') SYSDTXT = '💻 පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '💻 System status'

var VER = ''
if (Config.LANG == 'SI') VER = '🧬 Version'
if (Config.LANG == 'EN') VER = '🧬 Version'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '```Hey There! Bot Online now. 💃🏻♥️```\n\n*Developer:* ```Black Amda```\n\n*Official Website:* https://amdaniwasa.com\n\n*Youtube channel :* https://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ\n\n```Thank You For Using Queen Amdi💞```'
else MSG = ALIVEMSG


Asena.addCommand({pattern: 'alive', fromMe: tk, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

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
        imageMessage: media.message.imageMessage    
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

Asena.addCommand({pattern: 'qaversion', fromMe: tk, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await QueenAmdi.amdi_setup()
    await message.client.sendMessage(message.jid, 
        `*✨ Alora Version 🎉*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://....../`
   , MessageType.text, {quoted: message.data});
    
}));
