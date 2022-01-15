/*Alora 🛠️ xRASHMITH
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

var ALIVEMG = ''
if (Config.ALIVEMSG == 'default') MSG = '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│👸Ｉ ＡＭ A L I V E  \n👸  │╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n├▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\n\nـــ٨ـہہـ♡ـ٨ـہـ'
else MSG = Config.ALIVEMSG

var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }



    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
       
 const buttons = [
  {buttonId: BUTTHANDLE + 'abversion', buttonText: {displayText: SYSDTXT }, type: 1},
  {buttonId: BUTTHANDLE + 'absystats', buttonText: {displayText: VER }, type: 1},
 ]

const buttonMessage = {
    
    contentText: "" ,
    footerText: 'ᴀʟᴏʀᴀ ᴘᴜʙʟɪᴄ sᴛᴀʙʟᴇシ︎',
    buttons: buttons,
    headerType: 4
    
}

             
       var image = await axios.get ('https://i.ibb.co/SBDH0QV/20220114-180954.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│👸Ｉ ＡＭ A L I V E  \n👸  │╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n├▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\n\nـــ٨ـہہـ♡ـ٨ـہـ"})


        
  await message.client.sendMessage (message.jid, buttonMessage, MessageType.buttonsMessage)

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2022 | Queen Alora*' })
     }
    }));

    Asena.addCommand({pattern: 'absystats', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'abversion', fromMe: true, desc: Lang.BOT_V,  deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚝ Queen Alora Version 🎶*\n\n` + 
                '```Installed version :```\n' +
                Lang.VERS_ION + 
                `\n\nCheck official website : https://www.alorabot.netlify.app/`
           , MessageType.text);
            
        }));
}
