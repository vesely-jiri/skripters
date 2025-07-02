FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN npm run build


FROM node:22-alpine

WORKDIR /app

COPY --from=build /app /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start; else npm run dev; fi"]
