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



Asena.addCommand({pattern: 'alive$', fromMe: tk, desc: 'Nothing' }, (
  async (
    message, match
  ) => {
   

 
// send a buttons message!
const buttons = [
  {buttonId:  'absysdtxt$', buttonText: {displayText: '✆ System status' }, type: 1},
  {buttonId:  'abversion$', buttonText: {displayText: '☩ Version' }, type: 1}
]

const buttonMessage = {
    contentText: '╭──────────◅\n│\n│🎧ʜᴇʟʟᴏ ᴜꜱᴇʀ\n│╭──────────────╮\n│ 👸🏻Ｉ ＡＭ A L I V E  👸\n│╰──────────────╯\n│\n├►ɪ ᴀᴍ ᴀʟᴏʀᴀ ʙᴏᴛ\n│\n│▻ᴠᴇʀꜱɪᴏɴ - ᴡɪᴛʜ ʙᴜᴛᴛᴏɴꜱ\n│\n├▻ᴅᴇᴠᴇʟᴏᴘᴇʀ - xY̷A̷Z̷U̷W̷A̷\n│\n├▻ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅ - .alora\n│\n│💞ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ👸\n│\n╰────────────▻\nـــ٨ـہہـ♡ـ٨ـہـ',
    footerText: '© ǫᴜᴇᴇɴ ᴀʟᴏʀᴀ ᴛᴇꜱᴛ ',
    buttons: buttons,
    headerType: 1
    
}

await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));



Asena.addCommand({on: 'abversion', fromMe: tk, deleteCommand: false}, (async (message, match) => {
  if (message.message = 'abversion') {
   
await message.sendMessage('Alora', MessageType.text);
  }
  }));
 
