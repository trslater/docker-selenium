FROM node:18-slim

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY ./public /app/public

EXPOSE 1234

CMD ["npm", "start"]
