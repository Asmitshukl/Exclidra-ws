FROM node:22-alpine

WORKDIR /usr/src/app

RUN corepack enable

COPY ./packages ./packages

COPY ./package.json ./package.json

COPY ./turbo.json ./turbo.json

COPY ./apps/ws-backend ./apps/ws-backend

RUN pnpm install

COPY . .

RUN pnpm run db:migrate

EXPOSE 3000

CMD ["npm" , "run" ,"buildws"]