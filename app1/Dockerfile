FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./app1/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY ./app1/src /app/src
COPY ./app1/public /app/public
COPY ./app1/tailwind.config.js /app/tailwind.config.js
COPY ./app1/craco.config.js /app/craco.config.js

EXPOSE 3001

CMD ["npm", "start"]
