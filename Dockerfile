ARG NODE_IMAGE=node:22.4.1-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /app && chown node:node /app
WORKDIR /app

FROM base AS dependencies
COPY ./package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

FROM dependencies AS build
COPY .env .env
RUN npm run build

FROM base AS production
ENV APP_NAME="auth-botia"
ENV NODE_ENV=production
ENV PORT=4001
ENV HOST=0.0.0.0
COPY --from=build /app/dist ./dist
COPY --from=build /app/.env .env
COPY ./package*.json ./
RUN npm cache clean --force && npm install
# RUN npm install
EXPOSE 4001
CMD [ "dumb-init", "node", "./dist/main.js" ]
