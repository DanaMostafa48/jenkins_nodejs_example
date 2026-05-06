FROM node:18

WORKDIR /nodeapp

COPY nodeapp/package*.json ./
RUN npm install

COPY nodeapp .

CMD ["node", "app.js"]