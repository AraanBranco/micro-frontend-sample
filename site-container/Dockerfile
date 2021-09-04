FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./site-container/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY ./site-container/src /app/src
COPY ./site-container/public /app/public
COPY ./site-container/tailwind.config.js /app/tailwind.config.js
COPY ./site-container/craco.config.js /app/craco.config.js

EXPOSE 3000

CMD ["npm", "start"]
