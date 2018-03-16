FROM node:9
LABEL maintainer="https://github.com/michmich112"

ENV NODE ENV=development
WORKDIR /usr/local/src

COPY package.json /usr/local/src/package.json
COPY yarn.lock /usr/local/src/yarn.lock
RUN yarn install

COPY app.js /usr/local/src/app.js
COPY LogOn.js /usr/local/src/LogOn.js
COPY .keys /usr/local/src/.keys

RUN npm --version

CMD ["yarn", "run", "start"]