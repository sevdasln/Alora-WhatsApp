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

Asena.addCommand({ pattern: 'alora', fromMe: tk, desc: 'down;load passpepr'
}, (async (message, match) => {
