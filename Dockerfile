# 1. Use node:alpine as base image
FROM node:alpine

# 2. Set /app as the working directory
WORKDIR /app

# 3. Copy the source code and package.json to the Docker image
COPY . .

# 4. Install dependencies
RUN yarn install

# 5. Build the app
RUN yarn build

# 6. Expose port 3000
EXPOSE 3000

# 7. Start the app
CMD ["yarn", "start"]