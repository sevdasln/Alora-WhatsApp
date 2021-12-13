/* Copyright (C) 2021 xYAZUWA

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

AloraV3 - xYAZUWA
*/



const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

//𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝
//𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝

if (Config.WORKTYPE == 'private') {

    Asena.addcommand({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.📩Version'}, type: 1},//Hello Bro. this is free to edit.Just let me know it 🤗
  {buttonId: 'MNU', buttonText: {displayText: '.📱SystemStats'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://i.ibb.co/J2rwPPj/20211107-201343.jpg',
    contentText: "🤗𝖧𝗈𝗐 𝖺𝗋𝖾 𝗒𝗈𝗎?",
    footerText: '🌹𝖠𝗅𝗈𝗋𝖺 𝖵2',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://i.ibb.co/J2rwPPj/20211107-201343.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🤗```\n\n📱 My name : 𝖠𝗅𝗈𝗋𝖺 𝖵2\n\n🧰 Developer: 𝗑𝖸𝖠𝖹𝖴𝖶𝖠\n\n🤗Thank You For Using 𝖠𝗅𝗈𝗋𝖺 𝖵2🌹💃"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.📩Version'}, type: 1},//Hello Bro.This is free to edit. just let me know 😃
  {buttonId: 'MNU', buttonText: {displayText: '.📱SystemStats'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://i.ibb.co/J2rwPPj/20211107-201343.jpg',
    contentText: "𝖧𝗈𝗐 𝖺𝗋𝖾 𝖸𝗈𝗎🤗",
    footerText: '🌹𝖠𝗅𝗈𝗋𝖺 ,𝖵2',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*🌹Alora V2💃*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asena.addcommand({pattern: '📱SystemStats', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

//𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝
//𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝𝕝

    Asena.addcommand({pattern: '📩version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🌹𝖠𝗅𝗈𝗋𝖺 𝖵2*\n\n` + 
                '```Installed version :```\n' +
                ' V 2.2.4 Public'+
                `\n\n🧰 Check github for bot: https://github.com/xYAZUWA/AloraButtons`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addcommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.📩Version'}, type: 1},
  {buttonId: 'MNU', buttonText: {displayText: '.📱SystemStats'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://i.ibb.co/J2rwPPj/20211107-201343.jpg',
    contentText: "🌹𝖧𝗈𝗐 𝖺𝗋𝖾 𝗒𝗈𝗎?",
    footerText: '🤗 𝖠𝗅𝗈𝗋𝖺 𝖵2',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://i.ibb.co/J2rwPPj/20211107-201343.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```🏅Hey There! I'm Online now.🤗```\n\n🌹 My name : 𝖠𝖫𝖮𝖱𝖠 𝖵2\n\n📝 Developer: 𝗑𝖸𝖠𝖹𝖴𝖶𝖠\n\n⚒️Thank You For Using 𝖠𝗅𝗈𝗋𝖺 𝖵2"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.📩Version'}, type: 1},
  {buttonId: 'MEN', buttonText: {displayText: '.📱SystemStats'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://i.ibb.co/J2rwPPj/20211107-201343.jpg',
    contentText: "🌹𝖧𝗈𝗐 𝖺𝗋𝖾 𝗒𝗈𝗎?",
    footerText: '🤗𝖠𝗅𝗈𝗋𝖺 𝗏2',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*🌹𝖠𝗅𝗈𝗋𝖺 𝖵2*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asena.addcommand({pattern: '📱SystemStats', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addcommand({pattern: '📩Version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🌹𝖰𝗎𝖾𝖾𝗇 𝖠𝗅𝗈𝗋𝖺 𝖵2*\n\n` + 
                '```Installed version :```\n' +
                ' V 2.2.4 - Public'+
                `\n\n🧰 Check github for bot:  https://github.com/xYAZUWA/AloraButtons`
           , MessageType.text);
            
        }));
}
