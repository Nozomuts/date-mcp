FROM node:23.11-slim AS base

FROM base AS builder

WORKDIR /app

COPY . .

RUN --mount=type=cache,target=/root/.npm npm i -g pnpm
RUN --mount=type=cache,target=/root/.npm pnpm i --frozen-lockfile
RUN --mount=type=cache,target=/root/.npm pnpm run build

FROM base AS release

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder /app/node_modules /app/node_modules

ENV NODE_ENV=production

WORKDIR /app

ENTRYPOINT ["node", "build/index.js"]
