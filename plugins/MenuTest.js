/* Copyright (C) 2021 xYAZUWA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Alora - xYAZUWA
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

Asena.addCommand({ pattern: 'menu', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {
        
//list message


   const rows = [
 {title: '⚒️🌹 𝖠𝖫𝖮𝖱𝖠 𝖯𝖱𝖮 𝖳𝖮𝖮𝖫𝖲🌹⚒️', description: `▻\n\n

⚒️Usage: *.mp4enhance*
🌹Desc: 🇬🇧 Enhance video’s quality.

⚒️Usage: *.interp*
🌹Desc: 🇬🇧 Increases the FPS of the video.

⚒️Usage: *.mp4slowmo*
🌹Desc: 🇬🇧 Applies true-slowmo to non-slow motion videos.

⚒️Usage: *.x4mp4*
🌹Desc: 🇬🇧 Reduce video’s quality by 75%.

⚒️Usage: *.x2mp4*
🌹Desc: 🇬🇧 Reduce video’s quality by 50%.

⚒️Usage: *.gif*
🌹Desc: 🇬🇧 Converts video to gif.

💻⚒️Usage: *.agif*
🌹Desc: 🇬🇧 Converts video to voiced gif.

⚒️Usage: *.mp4blur*
🌹Desc: 🇬🇧 Blurs the background of the video.

⚒️Usage: *.mp4stab*
🌹Desc: 🇬🇧 Decreases the vibration of the video.

⚒️Usage: *.mp4rainbow*
🌹Desc: 🇬🇧 Applies a rainbow effect to video.

⚒️Usage: *.mp4color*
🌹Desc: 🇬🇧 Makes the colors of the video more vivid and beautiful.

⚒️Usage: *.mp4art*
🌹Desc: 🇬🇧 Applies a art effect to the video.

⚒️Usage: *.mp4negative*
🌹Desc: 🇬🇧 Applies a negative color filter to the video.

⚒️Usage: *.mp4vintage*
🌹Desc: 🇬🇧 Applies a nostalgic effect to video.

⚒️Usage: *.mp4bw*
🌹Desc: 🇬🇧 Applies a monochrome effect to video.

⚒️Usage: *.mp4reverse*
🌹Desc: 🇬🇧 Plays the video in reverse.

⚒️Usage: *.mp4edge*
🌹Desc: 🇬🇧 Applies a edge effect to the video.

⚒️Usage: *.mp4image*
🌹Desc: 🇬🇧 Converts photo to 5 sec video.

⚒️Usage: *.spectrum*
🌹Desc: 🇬🇧 Converts the spectrum of sound into video.

⚒️Usage: *.waves*
🌹Desc: 🇬🇧 Converts the wave range of sound to video.

⚒️Usage: *.frequency*
🌹Desc: 🇬🇧 Converts the frequency range of sound to video.

⚒️Usage: *.avec*
🌹Desc: 🇬🇧 Converts the histogram of sound to video.

⚒️Usage: *.volumeaudio*
🌹Desc:  Converts the decibel value of the sound into video.

⚒️Usage: *.cqtaudio*
🌹Desc:  Converts the CQT value of audio to video.

⚒️Usage: *.mp3eq*
🌹Desc:  Adjusts the sound to a crystal clear level.

⚒️Usage: *.mp3crusher*
🌹Desc:  Distorts the sound, makes ridiculous.

⚒️Usage: *.mp3reverse*
🌹Desc:  Plays the sound in reverse.

⚒️Usage: *.mp3pitch*
🌹Desc:  Makes the sound thinner and faster.

⚒️Usage *.mp3low*
🌹Desc:  Makes the sound deep and slower.

⚒️Usage: *.x2mp3*
🌹Desc:  Makes the sound twice as fast.

⚒️Usage: *.mp3volume*
🌹Desc:  Increase sound level so much.

⚒️Usage: *.bwimage*
🌹Desc:  Applies a monochrome effect to image.

⚒️Usage: *.vintageimage*
🌹Desc:  Applies a vinatge effect to video.

⚒️Usage: *.edgeimage*
🌹Desc: Applies a edge effect to the photo.

⚒️Usage: *.enhanceimage*
🌹Desc: Makes the photo clearer.

⚒️Usage: *.blurimage*
🌹Desc :  Blurs the background of the photo.

⚒️Usage: *.grenimage*
🌹Desc:  Applies grain effect to the photo.

⚒️Usage: *.negativeimage*
🌹Desc:  Applies a negative color filter to the photo.

⚒️Usage: *.rainbowimage*
🌹Desc: Applies rainbow effect to the photo.

⚒️Usage: *.colorimage*
🌹Desc: It makes the colors of the photo more vivid and attractive.

⚒️Usage: *.artimage*
🌹Desc:  Applies a art effect to the photo 


` , rowId:"rowId1"},
 


{title: '🌸👸 𝖠𝖫𝖮𝖱𝖠 𝖫𝖮𝖦𝖮 𝖬𝖠𝖪𝖤𝖱 🌸👸', description: `▻\n\n

👸Usage: *.pemoji*
🌸Desc: ඉමොජි රූපයට පරිවර්තනය කරන්න.

👸Usage: *.pornhub*
🌸Desc: එය සැපය ඇති text කළු පැහැති පෙනුම රූපයක් යවයි.
ඔබ විසින් * මගින් වෙන් කර ඇති ශීර්ෂය සහ උපසිරැසි අනුපිළිවෙලට ඇතුළත් කළ යුතුය!.

👸Usage: *.sandwriting*
🌸Desc: එය සපයා ඇති පෙළෙහි වැලි රූපයක් යවයි.

👸Usage: *.blackpink*
🌸Desc: එය සපයා ඇති පෙළෙහි කළු රෝස රූපයක් යවයි.

👸Usage: *.blood*
🌸Desc: එය සපයා ඇති පෙළෙහි ලේ රූපයක් යවයි.

👸Usage: *.snow*
🌸Desc: එය සපයා ඇති පෙළෙහි හිම රූපයක් යවයි.

👸Usage: *.cloud*
🌸Desc: එය සපයා ඇති පෙළෙහි අහස රූපයක් යවයි.

👸Usage: *.sparkling*
🌸Desc: පාඨය දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි
ඔබ විසිනු මගින් වෙන් කර ඇති ශීර්ෂය සහ උපමාතෘකාව අනුපිළිවෙලට ඇතුළත් කළ යුතුය!

👸Usage: *.watercolour*
🌸Desc: පාඨය ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.gaming*
🌸Desc: නින්ජා තේමා ලාංඡනය සඳහා ශීර්ෂ පාඨය ලෙස පෙළ ඇතුළු කරයි.

👸Usage: *.neonlight*
🌸Desc: පෙළ neonlight තේමා රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.3dtext*
🌸Desc: සපයා ඇති පෙළ ත්‍රිමාණ මෝස්තර රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.glitch*
🌸Desc:එය ඔබට glitch සකසයි.

👸Usage: *.wood*
🌸Desc:එය ඔබට දැව ආකාරයේ logo සකසයි.

👸Usage: *.8bit*
🌸Desc:එය ඔබට bit ආකාරයේ logo සකසයි.

👸Usage: *.shadow*
🌸Desc:එය ඔබට සෙවනැල්ල ආකාරයේ logo සකසයි.

👸Usage: *.underwater*
🌸Desc:එය ඔබට දිය යට ආකාරයේ logo සකසයි.

👸Usage: *.flower*
🌸Desc:එය ඔබට දිය යට logo සකසයි.

👸Usage: *.burn*
🌸Desc:එය ඔබට පුළුස්සා දමන logo සකසයි.

👸Usage: *.candy*
🌸Desc:එය ඔබට රසකැවිලි logo සකසයි.

👸Usage: *.harrypotter*
🌸Desc:එය ඔබට හැරී පොටර් logo සකසයි.

👸Usage: *.grass*
🌸Desc:එය ඔබට තණකොළ logo සකසයි.

👸Usage: *.candlemug*
🌸Desc:එය ඔබට candlemug logo සකසයි.

👸Usage: *.romance*
🌸Desc:එය ඔබට ආදර logo සකසයි.

👸Usage: *.lovemsg*
🌸Desc:එය ඔබට ආදරයකතා logo සකසයි.

*Copyright © 2021 | ALORA V2🎻*
` , rowId:"rowid2"},


{title: '🌹📝𝖦𝖱𝖮𝖴𝖯 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲📝🌹', description: `▻▻▻▻▻▻▻▻\n\n

🧰 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:*  .ban
🌹 *𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖪𝗂𝖼𝗄𝗌 𝗆𝖾𝗆𝖻𝖾𝗋 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝖾 𝗆𝖾𝗌𝖺𝖺𝗀𝖾 𝗈𝗋 𝗍𝖺𝗀 𝗁𝗂𝗆/𝗁𝖾𝗋)

🧰 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖺𝖽𝖽
🌹 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:  𝖳𝗁𝗂𝗌 𝖠𝖽𝖽𝗌 𝖬𝖾𝗆𝖻𝖾𝗋 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉.
(𝖾𝗑𝖺𝗆𝗉𝗅𝖾 :  .𝖺𝖽𝖽 94712345689)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗉𝗋𝗈𝗆𝗈𝗍𝖾
*🌹𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖬𝖾𝗇𝗍𝗂𝗈𝗇𝖾𝖽 𝖬𝖾𝗆𝖻𝖾𝗋 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .demote
*🌹Description:*  dismisses as admin(re𝗉𝗅𝗒 𝗍𝗈 𝗍𝖺𝗋𝗀𝖾𝗍𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾(

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗆𝗎𝗍𝖾
*🌹Description:*  𝖲𝗂𝗅𝖾𝗇𝖼𝖾 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 (𝖮𝗇𝗅𝗒 𝖺𝖽𝗆𝗂𝗇𝗌 𝖼𝖺𝗇 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗎𝗇𝗆𝗎𝗍𝖾
*🌹Description:* 𝖠𝗅𝗅𝗈𝗐𝗌 𝖬𝖾𝗆𝖻𝖾𝗋𝖽 𝗍𝗈 𝗌𝖾𝗇𝖽 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌", rowId:"rowid3"},

 
{title: '📱🔅 𝖮𝖶𝖭𝖤𝖱 𝖮𝖭𝖫𝖸,𝖲𝖴𝖣𝖮🔅📱', description: "▻\n\n

📱 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:*  .ban
🔅 *𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖪𝗂𝖼𝗄𝗌 𝗆𝖾𝗆𝖻𝖾𝗋 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝖾 𝗆𝖾𝗌𝖺𝖺𝗀𝖾 𝗈𝗋 𝗍𝖺𝗀 𝗁𝗂𝗆/𝗁𝖾𝗋)

📱 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖺𝖽𝖽
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖳𝗁𝗂𝗌 𝖠𝖽𝖽𝗌 𝖬𝖾𝗆𝖻𝖾𝗋 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉.
(𝖾𝗑𝖺𝗆𝗉𝗅𝖾 :  .𝖺𝖽𝖽 94712345689)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗉𝗋𝗈𝗆𝗈𝗍𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖬𝖾𝗇𝗍𝗂𝗈𝗇𝖾𝖽 𝖬𝖾𝗆𝖻𝖾𝗋 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .demote
*🔅Description:*  dismisses as admin(re𝗉𝗅𝗒 𝗍𝗈 𝗍𝖺𝗋𝗀𝖾𝗍𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾(

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗆𝗎𝗍𝖾
*🔅Description:*  𝖲𝗂𝗅𝖾𝗇𝖼𝖾 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 (𝖮𝗇𝗅𝗒 𝖺𝖽𝗆𝗂𝗇𝗌 𝖼𝖺𝗇 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗎𝗇𝗆𝗎𝗍𝖾
*🔅Description:* 𝖠𝗅𝗅𝗈𝗐𝗌 𝖬𝖾𝗆𝖻𝖾𝗋𝗌 𝗍𝗈 𝗌𝖾𝗇𝖽 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗉𝗅𝗎𝗀𝗂𝗇
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝗁𝗈𝗐𝗌 𝗍𝗁𝖾 𝗉𝗅𝗎𝗀𝗂𝗇𝗌 𝗍𝗁𝖺𝗍 𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖾𝖽.

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗂𝗇𝗏𝗂𝗍𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝗌 𝗍𝗁𝖾 𝖼𝗁𝖺𝗍𝗌 𝗂𝗇𝗏𝗂𝗍𝖾 𝗅𝗂𝗇𝗄

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗐𝖾𝗅𝖼𝗈𝗆𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝖾𝗍𝗌 𝗍𝗁𝖾 𝗐𝖾𝗅𝖼𝗈𝗆𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 (𝗎𝗌𝖾 # 𝖿𝗈𝗋 𝗎𝗇𝖽𝖾𝗋𝗌𝖼𝗈𝗋𝖾𝗌)

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗀𝗈𝗈𝖽𝖻𝗒𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝖾𝗍𝗌 𝗀𝗈𝗈𝖽𝖻𝗒𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗋𝖾𝗌𝗍𝖺𝗋𝗍
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖱𝖾𝗌𝗍𝖺𝗋𝗍𝗌 𝗍𝗁𝖾 𝖻𝗈𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗌𝗁𝗎𝗍𝖽𝗈𝗐𝗇 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝗁𝗎𝗍𝖽𝗈𝗐𝗇𝗌 𝖻𝗈𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖽𝗒𝗇𝗈
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖢𝗁𝖾𝖼𝗄𝗌 𝖧𝖾𝗋𝗈𝗄𝗎 𝖽𝗒𝗇𝗈 𝗎𝗌𝖺𝗀𝖾

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗌𝖾𝗍𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖢𝗋𝖾𝖺𝗍𝖾𝗌 𝖧𝖾𝗋𝗈𝗄𝗎 𝖼𝗈𝗇𝖿𝗂𝗀 𝗏𝖺𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝖽𝖾𝗅𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖣𝖾𝗅𝖾𝗍𝖾𝗌 𝗁𝖾𝗋𝗈𝗄𝗎 𝖼𝗈𝗇𝖿𝗂𝗀 𝗏𝖺𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗀𝖾𝗍𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖦𝗂𝗏𝖾𝗌 𝗍𝗁𝖾 𝖢𝗈𝗇𝖿𝗂𝗀 𝖵𝖺𝗋 𝗅𝗂𝗌𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗉𝗉 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖳𝗁𝖾 𝗉𝗁𝗈𝗍𝗈 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝗋𝖾𝗉𝗅𝗒 𝗌𝖾𝗍𝗌 𝖺𝗌 𝗒𝗈𝗎𝗋 𝖽𝗉

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖻𝗅𝗈𝖼𝗄
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖡𝗅𝗈𝖼𝗄𝗌 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝗎𝗇𝖻𝗅𝗈𝖼𝗄
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖴𝗇𝖻𝗅𝗈𝗄𝗌 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝗃𝗂𝖽 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖦𝗂𝗏𝖾𝗌 𝗍𝗁𝖾 𝖼𝗁𝖺𝗍𝗌 𝗃𝗂𝖽
` , rowId:"rowid4"}


{title: '╭─────────────────────╮\n⌨︎ *👸ALORA COMMAND LIST 💃*⌨︎\n╰─────────────────────╯', description: `▻\n\n


*⚒️ Command:* ```.vtalk```
*📝 Description:* ```Starts to Eva voice chat.``` 

*⚒️ Command:* ```.fulleva ```
*📝 Description:* ```Activates full functional Eva features. Turn your account into a ai chatbot!``` 
*⌨️ Example:* ```.fulleva on / off```

*⚒️ Command:* ```.menu```
*📝 Description:* ```Gives The Button Menu``` 

*⚒️ Command:* ```.owner```
*📝 Description:* ```down;load passpepr``` 

*⚒️ Command:* ```.xmedia```
*📝 Description:* ```It is a plugin with more than 25 media tools.``` 

*⚒️ Command:* ```.install ```
*📝 Description:* ```Install external plugins.``` 
*⚠️ Warn:* ```Get plugins only from YAZUWA.```

*⚒️ Command:* ```.plugin```
*📝 Description:* ```Shows the plugins you have installed.``` 

*⚒️ Command:* ```.remove```
*📝 Description:* ```Removes the plugin.``` 

*⚒️ Command:* ```.ban ```
*📝 Description:* ```Ban someone in the group. Reply to message or tag a person to use command.``` 

*⚒️ Command:* ```.add```
*📝 Description:* ```Adds someone to the group.``` 

*⚒️ Command:* ```.promote ```
*📝 Description:* ```Makes any person an admin.``` 

*⚒️ Command:* ```.demote ```
*📝 Description:* ```Takes the authority of any admin.``` 

*⚒️ Command:* ```.mute ```
*📝 Description:* ```Mute the group chat. Only the admins can send a message.
⌨️ Example: .mute & .mute 5m etc``` 

*⚒️ Command:* ```.unmute ```
*📝 Description:* ```Unmute the group chat. Anyone can send a message.``` 

*⚒️ Command:* ```.invite ```
*📝 Description:* ```Provides the group's invitation link.``` 

*⚒️ Command:* ```.afk ```
*📝 Description:* ```It makes you AFK - Away From Keyboard.``` 

*⚒️ Command:* ```.carbon```

*⚒️ Command:* ```.mp4audio```
*📝 Description:* ```Converts video to sound.``` 

*⚒️ Command:* ```.imagesticker```
*📝 Description:* ```Converts the sticker to a photo.``` 

*⚒️ Command:* ```.vsticker```
*📝 Description:* ```Converts animated stickers to video.``` 

*⚒️ Command:* ```.deepai```
*📝 Description:* ```Runs the most powerful artificial intelligence tools using artificial neural networks.``` 

*⚒️ Command:* ```.print ```
*📝 Description:* ```Prints the inside of the file on the server.``` 

*⚒️ Command:* ```.bashmedia ```
*📝 Description:* ```Sends audio, video and photos inside the server.``` 
*⌨️ Example:* ```video.mp4 && media/gif/pic.mp4```

*⚒️ Command:* ```.addserver```
*📝 Description:* ```Uploads image, audio or video to the server.``` 

*⚒️ Command:* ```.term ```
*📝 Description:* ```Allows to run the command on the server's shell.``` 

*⚒️ Command:* ```.mediainfo```
*📝 Description:* ```Shows the technical information of the replied video.``` 

*⚒️ Command:* ```.pmsend ```
*📝 Description:* ```Sends a private message to the replied person.``` 

*⚒️ Command:* ```.pmttssend ```
*📝 Description:* ```Sends a private voice message to the respondent.``` 

*⚒️ Command:* ```.ffmpeg ```
*📝 Description:* ```Applies the desired ffmpeg filter to the video.
⌨️ Example: .ffmpeg fade=in:0:30``` 

*⚒️ Command:* ```.filter ```
*📝 Description:* ```It adds a filter. If someone writes your filter, it send the answer. If you just write .filter, it show's your filter list.``` 

*⚒️ Command:* ```.stop ```
*📝 Description:* ```Stops the filter you added previously.``` 

*⚒️ Command:* ```.welcome```
*📝 Description:* ```It sets the welcome message. If you leave it blank it shows the welcome message.``` 

*⚒️ Command:* ```.goodbye```
*📝 Description:* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.``` 

*⚒️ Command:* ```.help ```
*📝 Description:* ```Gives information about using the bot from the Help menu.``` 

*⚒️ Command:* ```.degis ```
*📝 Description:* ```Changes the text of modules like alive, afk etc..``` 

*⚒️ Command:* ```.restart```
*📝 Description:* ```Restart Alora``` 

*⚒️ Command:* ```.shutdown```
*📝 Description:* ```Shutdown Alora``` 

*⚒️ Command:* ```.dyno```
*📝 Description:* ```Check heroku dyno usage``` 

*⚒️ Command:* ```.setvar ```
*📝 Description:* ```Set heroku config var``` 

*⚒️ Command:* ```.delvar ```
*📝 Description:* ```Delete heroku config var``` 

*⚒️ Command:* ```.getvar ```
*📝 Description:* ```Get heroku config var``` 

*⚒️ Command:* ```.locate```
*📝 Description:* ```It send your location.``` 
*⚠️ Warn:* ```Please open your location before using command!```

*⚒️ Command:* ```.log```
*📝 Description:* ```Saves the message you reply to your private number.``` 
*⚠️ Warn:* ```Does not support animated stickers!```

*⚒️ Command:* ```.meme```
*📝 Description:* ```Make memes your own
ඔබගේම මිම් සාදාගැනීමට ``` 

*⚒️ Command:* ```.neko```
*📝 Description:* ```Replied messages will be added to nekobin.com.``` 

*⚒️ Command:* ```.notes```
*📝 Description:* ```Shows all your existing notes.``` 

*⚒️ Command:* ```.save ```
*📝 Description:* ```Reply a message and type .save or just use .save <Your note> without replying``` 

*⚒️ Command:* ```.deleteNotes```
*📝 Description:* ```Deletes *all* your saved notes.``` 

*⚒️ Command:* ```.ocr ```
*📝 Description:* ```Reads the text on the photo you have replied.``` 

*⚒️ Command:* ```.kickme```
*📝 Description:* ```It kicks you from the group you are using it in.``` 

*⚒️ Command:* ```.pp```
*📝 Description:* ```Makes the profile photo what photo you reply.``` 

*⚒️ Command:* ```.block ```
*📝 Description:* ```Block user.``` 

*⚒️ Command:* ```.unblock ```
*📝 Description:* ```Unblock user.``` 

*⚒️ Command:* ```.jid ```
*📝 Description:* ```Giving user's JID.``` 

*⚒️ Command:* ```.removebg ```
*📝 Description:* ```Removes the background of the photos.``` 

*⚒️ Command:* ```.report ```
*📝 Description:* ```Sends reports to group admins.``` 

*⚒️ Command:* ```.scam ```
*📝 Description:* ```Creates 5 minutes of fake actions.``` 

*⚒️ Command:* ```.scan ```
*📝 Description:* ```Checks whether the entered number is registered on WhatApp.``` 

*⚒️ Command:* ```.trt```
*📝 Description:* ```It translates with Google Translate. You must reply any message.``` 
*⌨️ Example:* ```.trt tr it (From Turkish to Italian)```

*⚒️ Command:* ```.detectlang```
*📝 Description:* ```Guess the language of the replied message.``` 

*⚒️ Command:* ```.currency```

*⚒️ Command:* ```.tts ```
*📝 Description:* ```It converts text to sound.``` 

*⚒️ Command:* ```.song ```
*📝 Description:* ```Uploads the song you wrote.``` 

*⚒️ Command:* ```.video ```
*📝 Description:* ```Downloads video from YouTube.``` 

*⚒️ Command:* ```.yt ```
*📝 Description:* ```It searchs on YouTube.``` 

*⚒️ Command:* ```.wiki ```
*📝 Description:* ```Searches query on Wikipedia.``` 

*⚒️ Command:* ```.img ```
*📝 Description:* ```Searches for related pics on Google.``` 

*⚒️ Command:* ```.github ```
*📝 Description:* ```Collects github information from the given username.
⌨️ Example: .github phaticusthiccy``` 

*⚒️ Command:* ```.lyric ```
*📝 Description:* ```Finds the lyrics of the song.``` 

*⚒️ Command:* ```.covid ```
*📝 Description:* ```Shows the daily and overall covid table of more than 15 countries.``` 

*⚒️ Command:* ```.ss ```
*📝 Description:* ```Takes a screenshot from the page in the given link.``` 

*⚒️ Command:* ```.insta ```
*📝 Description:* ```Downloads videos or photos from Instagram.``` 

*⚒️ Command:* ```.animesay ```
*📝 Description:* ```It writes the text inside the banner the anime girl is holding``` 

*⚒️ Command:* ```.changesay ```
*📝 Description:* ```Turns the text into the change my mind poster.``` 

*⚒️ Command:* ```.trumpsay ```
*📝 Description:* ```Converts the text to Trump's tweet.``` 

*⚒️ Command:* ```.audio spam```
*📝 Description:* ```Sends the replied audio as spam.``` 

*⚒️ Command:* ```.foto spam```
*📝 Description:* ```Sends the replied photo as spam.``` 

*⚒️ Command:* ```.sticker spam```
*📝 Description:* ```Convert the replied photo or video to sticker and send it as spam.``` 

*⚒️ Command:* ```.vid spam```
*📝 Description:* ```Sends the replied video as spam.``` 

*⚒️ Command:* ```.killspam```
*📝 Description:* ```Stops spam command.``` 

*⚒️ Command:* ```.spam ```
*📝 Description:* ```It spam until you stop it.
⌨️ Example: .spam test``` 

*⚒️ Command:* ```.sticker```
*📝 Description:* ```It converts your replied photo or video to sticker.``` 

*⚒️ Command:* ```.alive```
*📝 Description:* ```Does bot work?``` 

*⚒️ Command:* ```.version```

*⚒️ Command:* ```.tagadmin```
*📝 Description:* ```Tags group admins.``` 

*⚒️ Command:* ```.tagall ```
*📝 Description:* ```Tags everyone in the group.``` 

*⚒️ Command:* ```.stam```
*📝 Description:* ```Sends the replied message to all members in the group.``` 

*⚒️ Command:* ```.tblend ```
*📝 Description:* ```Applies the selected TBlend effect to videos.``` 

*⚒️ Command:* ```.ttp ```
*📝 Description:* ```Converts text to plain painting.``` 

*⚒️ Command:* ```.attp ```
*📝 Description:* ```Adds rainbow effect to the text as a sticker.``` 

*⚒️ Command:* ```.unvoice```
*📝 Description:* ```Converts audio to sound recording.``` 

*⚒️ Command:* ```.update```
*📝 Description:* ```Checks the update.``` 

*⚒️ Command:* ```.update now```
*📝 Description:* ```It makes updates.``` 

*⚒️ Command:* ```.voicy```
*📝 Description:* ```It converts audio to text.``` 

*⚒️ Command:* ```.wallpaper```
*📝 Description:* ```It sends high resolution wallpapers.``` 

*⚒️ Command:* ```.weather ```
*📝 Description:* ```Shows the weather.``` 

*⚒️ Command:* ```.speedtest```
*📝 Description:* ```Measures Download and Upload speed.``` 

*⚒️ Command:* ```.ping```
*📝 Description:* ```Measures your ping.``` 

*⚒️ Command:* ```.short ```
*📝 Description:* ```Shorten the long link.``` 

*⚒️ Command:* ```.calc ```
*📝 Description:* ```Performs simple math operations.``` 

*⚒️ Command:* ```.whois```
*📝 Description:* ```Displays metadata data of group or person.``` 

` , rowId:"rowid5"}

]

const sections = [{title: "Section 1", rows: rows}]

const button = {
 buttonText: '📝CLICK ME👸✅',
 description: "╭╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╮\n👸✅ALORA COMMANDS✅👸 \n╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╯",
 sections: sections,
 listType: 1
}

await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    

})); 
