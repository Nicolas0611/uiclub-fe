# Use a newer LTS base image with smaller CVE surface
FROM node:24-alpine3.22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Patch OS packages and install dependencies
RUN apk upgrade --no-cache && npm ci

# Copy the rest of the app
COPY . .

# Generate Prisma client after schema is available
RUN npx prisma generate

# Expose port (adjust depending on your app)
EXPOSE 3000

# Run dev server (or build + serve for prod)
CMD ["npm", "run", "dev"]