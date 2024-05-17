# node 18
FROM node:18
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# To Build the image => run on terminal
# docker build -t node-app .