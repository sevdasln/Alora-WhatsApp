/* Codded by @xRASHMITH
😊STILL TESTING THIS.
*/

const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const axios = require('axios')

let wk = Config.WORKTYPE == 'public' ? false : true

const fbdl = require("fbdl-core");
const fs = require("fs");
 


fbdl.download("https://www.facebook.com/alanwalkermusic/videos/277641643524720")
    .then(res => {
        res.pipe(fs.createWriteStream("./aw.mp4"));
    });
 
