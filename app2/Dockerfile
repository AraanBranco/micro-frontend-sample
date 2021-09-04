FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./app2/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY ./app2/src /app/src
COPY ./app2/public /app/public
COPY ./app2/tailwind.config.js /app/tailwind.config.js
COPY ./app2/craco.config.js /app/craco.config.js

EXPOSE 3002

CMD ["npm", "start"]
