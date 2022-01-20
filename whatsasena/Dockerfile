


FROM fusuf/whatsasena:latest


RUN git clone https://github.com/xRASHMITH/Alora-WhatsApp /root/Alora-WhatsApp

WORKDIR /root/Alora-WhatsApp/

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
