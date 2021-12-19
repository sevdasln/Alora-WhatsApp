/*You can use this. But first , Let me know 🤗
Thank you..
█▀▀█ █░░ █▀▀█ █▀▀█ █▀▀█   █▀▀▄ █▀▀█ ▀▀█▀▀
█▄▄█ █░░ █░░█ █▄▄▀ █▄▄█   █▀▀▄ █░░█ ░░█░░
▀░░▀ ▀▀▀ ▀▀▀▀ ▀░▀▀ ▀░░▀   ▀▀▀░ ▀▀▀▀ ░░▀░░
*/


const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*◀type some word after command ▷"

if (Config.WORKTYPE == 'public') {
   
   
   Asena.addCommand({ pattern: 'a2lpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://i.ibb.co/xY47y3L/20211210-075024.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `┌─────────────────✦
│👸✮❮ *ALORA LOGO PACK* ❯✮👸
├───────✮✮✮✮✮✮────────✺
│
│
├─➢ ❒Cmd: *.wel*
├──➢ ✦ Dec: *ᴡᴇʟᴄᴏᴍᴇ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✮ Ex: *.wel Alora*
│
├─➢ ❒ Cmd: *.bye*
├──➢ ✦ Dec: *ʙʏᴇ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✮Ex: *.bye Alora*
│
├─➢ ❒Cmd: *.marvel*
├──➢ ✦ Dec: *ᴍᴀʀᴠᴇʟ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ1*
├─➢ ✮ Ex: *.marvel Alora*
│
├─➢ ❒Cmd: *.2marvel*
├──➢ ✦ Dec: *ᴍᴀʀᴠᴇʟ ꜱᴛʏʟᴇ ʟᴏɢᴏ2*
├─➢ ✪Ex: *.2marvel Alora*
│
├─➢ ❒Cmd: *.wolf*
├──➢ ✦ Dec: *ᴡᴏʟꜰ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.wolf Alora*
│
├─➢ ❒Cmd: *.lava*
├─➢ ✦ Dec: *ʟᴀᴠᴀ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.lava Alora*
│
├─➢ ❒Cmd: *.xmas*
├──➢ ✦ Dec: *xᴍᴀꜱ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.xmas Alora*
│
├─➢ ❒Cmd: *.round*
├──➢✦ Dec: *ʀᴏᴜɴᴅ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.round { image url }*
│
├─➢ ❒Cmd: .*.quot*
├──➢ ✦  Dec: *ǫᴜᴏᴛᴇᴅ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.quot Alora*
│
├─➢ ❒Cmd: *.harta*
├──➢ ✦ Dec: *ʜᴀʀᴛᴀ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✪Ex: *.harta Alora
│
├─➢ ❒Cmd: *.1917*
├──➢ ✦ Dec: *ᴏʟᴅ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✪Ex: *.1917 Alora
│
├─➢ ❒Cmd: *.minion*
├──➢ ✦ Dec: *ᴍɪɴɪᴏɴ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.minion Alora
│
├─➢ ❒Cmd: *.holo*
├──➢ ✦  Dec: *ʜᴏʟᴏ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.holo Alora*
│
├─➢ ❒Cmd: *.metalp*
├──➢ ✦  Dec: *ᴍᴇᴛᴀʟ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.metalp Alora*
│
├─➢ ❒Cmd: *.avengers*
├──➢ ✦  Dec: *ᴀᴠᴇɴɢᴇʀꜱ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.avengers Alora*
│
├─➢ ❒Cmd: *.halloween*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ʜᴀʟʟᴏᴡᴇᴇɴ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.halloween Alora
│
├─➢ ❒Cmd: *.horror*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ʜᴏʀʀᴏʀ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.horror Alora*
│
├─➢ ❒Cmd: *.glossyc*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ɢʟᴏꜱꜱʏ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.glossyc Alora*
│
├─➢ ❒Cmd: *.deluxe*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ᴅᴇʟᴜxᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.deluxe Alora*
│
├─➢ ❒Cmd: *.glossyb*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ɢʟᴏꜱꜱʏ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.glossyb Alora*
│
├─➢ ❒Cmd: *.joker*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ᴊᴏᴋᴇʀ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.joker Alora*
│
│✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜    
│❮✮✮ᖘꂦꅐꏂꋪꏂꀷ ꌃꌩ ꎭꌚ ꍏ꒒ꂦꋪꍏ✮✮❯
│❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂       
└───────────────────────▷❯`,quoted: message.data})

    }));

   Asena.addCommand({pattern: 'wel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Asena.addCommand({pattern: 'bye ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Asena.addCommand({pattern: '2marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
  Asena.addCommand ({pattern: 'wolf ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   
     Asena.addCommand({ pattern: 'harta ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'quot ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'round ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'lava ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '1917 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'minion ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'holo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'metalp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'avengers ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=T-Rex&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'halloween ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: 'horror ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})
    }));
      
     Asena.addCommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/xmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
      Asena.addCommand({ pattern: 'glossyc ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      Asena.addCommand({ pattern: 'deluxe ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
     Asena.addCommand ({ pattern: 'glossyb ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
      
      Asena.addCommand({ pattern: 'joker ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
