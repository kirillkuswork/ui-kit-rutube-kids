FROM node:20-buster-slim AS builder
ARG NPM_USER=""
ARG NPM_PASSWORD=""

WORKDIR /home/node/app

COPY . .

RUN npm i -g turbo; \
    npm i -g vite; \
    npm i -g pnpm@7.9.5

RUN  yarn install --immutable ;\
    yarn build; \
    yarn build-storybook

FROM nginx:stable-alpine-slim as deploy

COPY --from=builder /home/node/app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]