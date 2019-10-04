FROM node:carbon

WORKDIR /usr/src/api

COPY ./package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 5001

CMD [ "npm", "start" ]
