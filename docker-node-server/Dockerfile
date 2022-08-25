## Node Server
FROM node:18-bullseye
WORKDIR /home

RUN mkdir common_types

WORKDIR /home/app

COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json

RUN npm install
RUN npm install -g nodemon

ENV PORT 64546
EXPOSE 64546

CMD [ "nodemon" ]

