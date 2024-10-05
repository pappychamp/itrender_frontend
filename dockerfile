FROM node:20.15.1-bullseye
RUN npm update -g npm
RUN mkdir /workspace
WORKDIR /workspace
COPY . .
RUN npm install
CMD [ "npm","run", "dev" ]