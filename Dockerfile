FROM node:7.4.0

RUN npm install -g nodemon

WORKDIR /calcapi
ADD package.json /calcapi/package.json
RUN npm install

ADD . /calcapi

VOLUME [ "/calcapi" ]
EXPOSE 8080
