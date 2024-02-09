FROM node:18-alpine

WORKDIR /app

COPY public/ public/
COPY src/ src/
COPY package.json ./


RUN npm install

# RUN npm build

EXPOSE 3000
CMD [ "npm","start" ]
