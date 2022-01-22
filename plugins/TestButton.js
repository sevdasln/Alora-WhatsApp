

/*
█▀▀█ █░░ █▀▀█ █▀▀█ █▀▀█   █▀▀▄ █▀▀█ ▀▀█▀▀
█▄▄█ █░░ █░░█ █▄▄▀ █▄▄█   █▀▀▄ █░░█ ░░█░░
▀░░▀ ▀▀▀ ▀▀▀▀ ▀░▀▀ ▀░░▀   ▀▀▀░ ▀▀▀▀ ░░▀░░
*/


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
   
 Asena.addCommand({pattern: 'hdsong ?(.*)', fromMe: tk, desc: Lang.SONG_DESC}, (async (message, match) => { 

     if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});   
    let arama = await yts(match[1]);
    arama = arama.all;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});
  
    let title = arama[0].title.replace(' ', '+');
    let stream = ytdl(arama[0].videoId, {
        quality: 'highestaudio',
    });
    
    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
    ffmpeg(stream)
        .audioBitrate(320)
        .save('./' + title + '.mp3')
        .on('end', async () => {
            const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                });
            writer.addTag();
            {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {quoted: message.data, filename: title + '.mp3', mimetype: 'audio/mpeg'});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
            
      });
}))

Asena.addCommand({pattern: 'sdsong ?(.*)', fromMe: tk, desc: Lang.SONG_DESC}, (async (message, match) => { 

     if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});   
    let arama = await yts(match[1]);
    arama = arama.all;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
    var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});
  
    let title = arama[0].title.replace(' ', '+');
    let stream = ytdl(arama[0].videoId, {
        quality: 'audio',
    });
    
    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
    ffmpeg(stream)
        .audioBitrate(lowestaudio)
        .save('./' + title + '.mp3')
        .on('end', async () => {
            const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                });
            writer.addTag();
            {
                var uploading = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {quoted: message.data, filename: title + '.mp3', mimetype: 'audio/mpeg'});
                return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
            }
            
      });
