FROM node:latest
# docker pull

MAINTAINER Lester

ENV NODE-ENV=development

ENV PORT=5000

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE ${PORT}

ENTRYPOINT ["node", "app.js"]