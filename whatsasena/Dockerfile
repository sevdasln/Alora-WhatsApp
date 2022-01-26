#Copyright Alora 2022.
#Dont Use thia file Without my Permission
#If you do , Nothing I can do 😂


FROM fusuf/whatsasena:latest


RUN git clone https://github.com/xRASHMITH/Alora-WhatsApp /root/WhatsAsenaDuplicated

WORKDIR /root/WhatsAsenaDuplicated/

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
