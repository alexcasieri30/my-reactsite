# Use official Node.js image as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

RUN npm install nodemon

# Copy the rest of the API source code
COPY . .

# Expose port 5000 (or change to your API port)
EXPOSE 5000

# Start the API server
CMD ["npx", "nodemon", "index.js"]
