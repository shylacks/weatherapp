FROM node:alpine
WORKDIR /opt/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN npm install --silent
COPY ./ ./
CMD [ "npm", "start" ]