
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




# If you're using React Router, add a custom nginx.conf to handle fallback:
# server {
#   listen 80;
#   server_name localhost;

#   location / {
#     root /usr/share/nginx/html;
#     index index.html;
#     try_files $uri $uri/ /index.html;
#   }
# }
