FROM node:16.13.1-buster

WORKDIR /app

COPY package.json ./

RUN rm package-lock.json && npm i

ENV REACT_APP_BACKEND_BASE_URL http://localhost:8080

COPY . .

CMD ["npm", "start"]