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

Asena.addCommand({pattern: 'testm ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {


 var maximage = await axios.get ('https://i.ibb.co/b6KLMDP/MENULOGO.jpg', {responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(maximage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `▹╭─────────────────────╮\n⌨︎ *👸ALORA COMMAND LIST 💃*⌨︎\n╰─────────────────────╯\n\n📝Give Me Some time for this menu`}) 
}));




        
