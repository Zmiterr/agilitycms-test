FROM node:18.16.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

#RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]

