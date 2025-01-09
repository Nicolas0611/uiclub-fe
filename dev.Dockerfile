FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package manager files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Install dependencies
RUN \
  if [ -f yarn.lock ]; then yarn install; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
  else echo "Lockfile not found. Please commit lockfiles."; \
  fi

# Copy application files
COPY . /app

# Expose the development port
EXPOSE 3000

# Run the development server
CMD ["yarn", "dev"]
