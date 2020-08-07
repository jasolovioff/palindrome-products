FROM node:10-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npm run deployprod
CMD [ "npm", "start" ]