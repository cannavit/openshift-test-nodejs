FROM node:14.4.0-stretch

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn install

COPY . /usr/src/app/

EXPOSE 8080

CMD yarn start