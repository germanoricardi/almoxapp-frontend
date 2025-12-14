FROM node:24-alpine

# Install timezone data and set timezone to São Paulo
RUN apk add --no-cache tzdata \
  && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
  && echo "America/Sao_Paulo" > /etc/timezone

# Update npm to latest
RUN npm install -g npm@latest

# Create app directory
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app

# Copy package.json and install dependencies
COPY --chown=node:node package*.json ./
USER node
RUN npm install

# Copy application source code
COPY --chown=node:node . .

# Build the application (uncomment for production)
# RUN npm run build

# Expose internal Next.js port
EXPOSE 3000

# Start the application (development mode)
CMD [ "npm", "run", "dev" ]
