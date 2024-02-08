FROM node:18.alpine

WORKDIR /app

COPY . .

RUN npm install

# RUN npm build

EXPOSE 3000
CMD [ "npm","start" ]
