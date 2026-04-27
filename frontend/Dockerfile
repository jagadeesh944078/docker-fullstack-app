# 👇 Declare ARG globally
ARG ENVIRONMENT=dev

FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# 👇 Use same ARG here
ARG ENVIRONMENT

RUN if [ "$ENVIRONMENT" = "qa" ]; then \
      npm run build -- --mode qa ; \
    else \
      npm run build -- --mode development ; \
    fi

FROM nginx:alpine

# 👇 Use same ARG again
ARG ENVIRONMENT

COPY nginx.${ENVIRONMENT}.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html