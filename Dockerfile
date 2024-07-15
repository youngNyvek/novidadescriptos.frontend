ARG NODE_VERSION=20.12.1

FROM node:${NODE_VERSION}-alpine as base

COPY . /app

WORKDIR /app

RUN yarn install --frozen-lockfile
    
RUN yarn run build
    
EXPOSE 3000:3000
    
CMD [ "yarn", "start" ]
