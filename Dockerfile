FROM node:18 as builder
WORKDIR /usr/code
COPY package*.json ./
RUN npm ci --production
COPY . .
CMD ["npm", "run", "start:prod"]


FROM node:18-slim
COPY --from=builder /usr/code /usr/code
WORKDIR /usr/code
CMD ["npm", "run", "start:prod"]