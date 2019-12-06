FROM node:10.17-alpine

COPY . /workspace
WORKDIR /workspace
# RUN npm install

EXPOSE 3000

CMD npm start