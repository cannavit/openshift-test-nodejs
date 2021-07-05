FROM openshift/nodejs:14-ubi7

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn install

COPY . /usr/src/app/

EXPOSE 8080

CMD yarn start