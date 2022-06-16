FROM node:18-slim

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY ./index.js /app/

CMD ["npm", "start"]
