FROM node:18-alpine AS base

RUN yarn global add pnpm
RUN yarn global add serve

# Build
FROM base as deps

WORKDIR /app

COPY . ./

RUN pnpm i --frozen-lockfile

RUN pnpm run build-storybook

# Prod
FROM base AS production

WORKDIR /app

ENV HOST=0.0.0.0

ENV PORT=8080

ENV NODE_ENV=production

COPY --chown=node --from=deps /app/storybook-static ./dist

USER node

CMD [ "serve", "dist", "-p", "8080" ]