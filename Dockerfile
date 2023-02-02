##############################
#           BUILD
##############################
FROM node:12.13.0 as BUILD

WORKDIR /usr/src/app/

COPY package*.json ./

COPY ./config ./config

RUN wget https://github.com/lovell/sharp-libvips/releases/download/v8.8.1/libvips-8.8.1-linux-x64.tar.gz

RUN npm install --unsafe-perm

COPY . .

RUN npm run build:dist

##############################
#           PRODUCTION
##############################
FROM node:12-slim as PRODUCTION

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/

COPY ./config/ ./config
COPY package*.json ./

COPY --from=BUILD /usr/src/app/.stylelintrc.js ./.stylelintrc.js
COPY --from=BUILD /usr/src/app/.eslintrc.js ./.eslintrc.js
COPY --from=BUILD /usr/src/app/node_modules ./node_modules
COPY --from=BUILD /usr/src/app/src ./src
COPY --from=BUILD /usr/src/app/dist ./dist

EXPOSE 8000
CMD ["npm", "run", "start:dist"]
