/*const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command "

if (Config.WORKTYPE == 'public') {
   
   
   Asena.addCommand({ pattern: 'a2attp', fromMe: false, desc: 'its send attp pack'}, (async (message, match) => {

  await message.sendMessage(`▷◀Hello User▷◀\n
╭───────────────────◀
│
├──ᴀᴛᴛᴘ ᴘᴀᴄᴋ ʙʏ ᴀʟᴏʀᴀ✅
│
├▷ .01attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳ 
│   ❴ .attp alora ❵
│
├▷ .02attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳ 
│
├▷ .03attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .04attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .05attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .06attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .07attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .08attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .09attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .10attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .11attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .12attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .13attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .14attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .15attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .16attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .17attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .18attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .19attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .20attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .21attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .22attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .23attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .24attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .25attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .26attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .27attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .28attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .29attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .30attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .31attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .32attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .33attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .34attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .35attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .36attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .37attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .38attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .39attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .40attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
│👸αƚƚρ ραƈƙ Ⴆყ αʅσɾα🤗
╰───────────────────◀

`);
}));
   
   
     Asena.addCommand({ pattern: '01attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var alora = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '02attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '03attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '04attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/surfboard?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '05attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/orlando?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '06attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '07attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '08attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '09attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sunshine?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '10attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   Asena.addCommand({ pattern: '11attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})
    }));
      
     Asena.addCommand({ pattern: '12attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/glow?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      Asena.addCommand({ pattern: '13attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '14attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/casino?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      Asena.addCommand({ pattern: '15attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/star?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      
      Asena.addCommand({ pattern: '16attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/shrek?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
      Asena.addCommand({ pattern: '17attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    Asena.addCommand({ pattern: '18attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sugar?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    Asena.addCommand({ pattern: '19attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fireworks?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    Asena.addCommand({ pattern: '20attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/trance?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    Asena.addCommand({ pattern: '21attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd2?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    Asena.addCommand({ pattern: '22attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
      Asena.addCommand({ pattern: '23attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    Asena.addCommand({ pattern: '24attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/happy?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '25attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/zilch?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '26attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/prime?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '27attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sports?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '28attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '29attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/usa?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '30attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/cereal?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '31attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '32attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fun?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   Asena.addCommand({ pattern: '33attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   Asena.addCommand({ pattern: '34attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/smurf?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   Asena.addCommand({ pattern: '35attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/booking?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '36attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/husky?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '37attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hockey?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '38attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      Asena.addCommand({ pattern: '39attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/toothpaste?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   Asena.addCommand({ pattern: '40attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN, quoted: message.data})

    }));
      
   
   
   
   
   
   
}
*/
