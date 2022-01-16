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



    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `╭─────────────────────╮\n⌨︎ *👸ALORA COMMAND LIST 💃*⌨︎\n╰─────────────────────╯\n\n*⚒️ Command:* ```.vtalk```\n*📝 Description:* ```Starts to Eva voice chat.``` 
\n*⚒️ Command:* ```.fulleva ```
*📝 Description:* ```Activates full functional Eva features. Turn your account into a ai chatbot!``` 
*⌨️ Example:* ```.fulleva on / off```

*⚒️ Command:* ```.menu```
*📝 Description:* ```Gives The Button Menu``` 

*⚒️ Command:* ```.owner```
*📝 Description:* ```down;load passpepr``` 

*⚒️ Command:* ```.xmedia```
*📝 Description:* ```It is a plugin with more than 25 media tools.``` 

\n\n*⚒️ Command:* ```.install ```
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

*⚒️ Command:* ```.a2attp```
*📝 Description:* ```its send attp pack``` 

*⚒️ Command:* ```.carbon```

*⚒️ Command:* ```.mp4audio```
*📝 Description:* ```Converts video to sound.``` 

*⚒️ Command:* ```.imagesticker```
*📝 Description:* ```Converts the sticker to a photo.``` 

*⚒️ Command:* ```.vsticker```
*📝 Description:* ```Converts animated stickers to video.``` 

*⚒️ Command:* ```.deepai```
*📝 Description:* ```Runs the most powerful artificial intelligence tools using artificial neural networks.``` 

*⚒️ Command:* ```.v2maker```
*📝 Description:* ```Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්.``` 

*⚒️ Command:* ```.about```
*📝 Description:* ```Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්.``` 

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

*⚒️ Command:* ```.ffpack```
*📝 Description:* ```Free Fire logo maker``` 

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

*⚒️ Command:* ```.abversion```
*📝 Description:* ```System Stats``` 

*⚒️ Command:* ```.tagadmin```
*📝 Description:* ```Tags group admins.``` 

*⚒️ Command:* ```.tagall ```
*📝 Description:* ```Tags everyone in the group.``` 

*⚒️ Command:* ```.stam```
*📝 Description:* ```Sends the replied message to all members in the group.``` 

*⚒️ Command:* ```.tblend ```
*📝 Description:* ```Applies the selected TBlend effect to videos.``` 

*⚒️ Command:* ```.a2maker```
*📝 Description:* ```Shows textmaker tools with unlimited access.``` 

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
`);
   



    })); 
} 


        
