FROM node:lts-alpine

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn install-all
RUN yarn build

CMD yarn start
