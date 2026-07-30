FROM node:22-alpine AS build

WORKDIR /app

ENV CI=true

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

COPY pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build


FROM node:22-alpine AS prod-deps

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN printf "packages:\n  - '.'\nallowBuilds:\n  esbuild: true\n" > pnpm-workspace.yaml

RUN pnpm install --prod --frozen-lockfile


FROM node:22-alpine

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

USER node

EXPOSE 5000

CMD ["node", "dist/index.mjs"]