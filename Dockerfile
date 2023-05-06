FROM node:12-alpine

USER nodeuser

WORKDIR /var/www/html

COPY package.json ./
RUN npm install --ignore-scripts

COPY src .

EXPOSE 3000
CMD ["npm", "start"]