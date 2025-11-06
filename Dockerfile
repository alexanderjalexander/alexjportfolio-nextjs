FROM alpine:latest

RUN \
apk add --no-cache \
nodejs npm

WORKDIR /app

ADD package.json package-lock.json /app/
RUN npm install

ADD . .
RUN npm run build

CMD npm start