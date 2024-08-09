ARG NODE_VERSION=20.12.1

FROM node:${NODE_VERSION}-alpine as base

COPY . /app

WORKDIR /app

RUN yarn install --frozen-lockfile
    
ENV NEXT_PUBLIC_NEWS_URL=https://api.novidadescripto.com.br/news
ENV NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID=ca-pub-3646211809176894

RUN yarn run build
    
EXPOSE 3000:3000
    
CMD [ "yarn", "start" ]
