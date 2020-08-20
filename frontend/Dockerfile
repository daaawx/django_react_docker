FROM node:10-stretch-slim

WORKDIR /app/frontend

COPY ./package.json .

RUN npm install && npm cache clean --force
