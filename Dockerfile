FROM node:14.17.0

EXPOSE 5000

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start-prod" ]
