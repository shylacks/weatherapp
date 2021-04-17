FROM node:alpine
WORKDIR /opt/app
COPY ./package*.json ./
RUN npm install --silent
RUN npm install react-redux --save
COPY ./ ./
CMD [ "npm", "start" ]