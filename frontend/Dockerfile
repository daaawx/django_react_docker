FROM node:14.8.0-stretch

WORKDIR /app/frontend

COPY ./package.json .

RUN npm install && npm cache clean --force
