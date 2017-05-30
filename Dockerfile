FROM node:6.10.2

RUN apt-get clean && \
    apt-get update

RUN npm install -g @angular/cli


WORKDIR /var/web
ADD package.json package.json
ADD client client
ADD server server


WORKDIR /var/web/client
RUN npm install --production
RUN ng build --prod --aot

WORKDIR /var/web/server
RUN npm install --production

WORKDIR /var/web
CMD ["npm", "start"]
