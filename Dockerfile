FROM node:21-alpine as builder

# Set the working directory
WORKDIR /var/www

COPY package.json .

# Remove existing node_modules and package-lock.json to avoid conflicts
RUN rm -rf node_modules yarn.lock

# Install dependencies
RUN yarn

# Copy the rest of the application files
COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.25.3-alpine

# Copy built assets from builder
COPY --from=builder /var/www/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
