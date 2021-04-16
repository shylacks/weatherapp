FROM node:alpine
WORKDIR /opt/app
COPY package*.json ./
RUN npm install --silent
COPY ./ ./
EXPOSE 4000
CMD ["node", "index.js"]