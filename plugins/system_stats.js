/* Credit goes to BlackAmda*/
/* Copyright (C) 2021 xYAZUWA

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Alora 🛠️ xRASHMITH
*/



const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('system_stats');

//𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝


if (Config.WORKTYPE == 'public') {

   var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '📣 පද්ධති තත්ත්වය'
if (Config.LANG == 'EN') SYSDTXT = '📣 System stats'

var VER = ''
if (Config.LANG == 'SI') VER = '📲 Version'
if (Config.LANG == 'EN') VER = '📲 Version'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│👸Ｉ ＡＭ A L I V E  \n👸  │╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n├▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\n\nـــ٨ـہہـ♡ـ٨ـہـ'
else MSG = Config.ALIVEMSG
      

 Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
    var image = await axios.get ('https://i.ibb.co/xY47y3L/20211210-075024.jpg', {responseType: 'arraybuffer'})
    var PIC = Buffer.from(image.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
         

 const buttons = [
  {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: SYSDTXT }, type: 1},
  {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: VER }, type: 1},
 ]

const buttonMessage = {
    
    contentText: MSG ,
    footerText: 'ᴀʟᴏʀᴀ ᴘᴜʙʟɪᴄ sᴛᴀʙʟᴇシ︎',
    buttons: buttons,
    headerType: 4,
    imageMessage: media.message.imageMessage 
}

  await message.client.sendMessage (message.jid, buttonMessage, MessageType.buttonsMessage)

    }));

    Asena.addCommand({pattern: 'qasysstats', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'qaversion', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🌹𝖰𝗎𝖾𝖾𝗇 𝖠𝗅𝗈𝗋𝖺 *\n\n` + 
                '```Installed version :```\n' +
                ' V 2.5.0 - Public'+
                `\n\n🧰 Check github for bot:  https://github.com/xYAZUWA/AloraButtons`
           , MessageType.text);
            
        }));
}
