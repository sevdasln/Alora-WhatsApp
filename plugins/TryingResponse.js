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



//send a template message with an image **attached**!


const buttons = [
  {index: 1, urlButton: {displayText: '⭐ Star Alora on GitHub!', url: 'https://github.com/xYAZUWA/Alora'}},
  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 1234-567'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const buttonMessage = {
    text: "Test",
    footer: 'Hello World',
    buttons: buttons,
    image: {url: 'https://i.ibb.co/c2s9Cbs/LOGOA.png'}
}

await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
