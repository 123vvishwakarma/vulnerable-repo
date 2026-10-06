FROM node:14.21.3

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --ignore-engines --production

COPY src ./src

EXPOSE 5000
CMD ["node", "src/server.js"]
