# inherit from an existing image to add the functionality
FROM node:20-alpine3.18

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Build the application.
RUN npm run build

# Run the application.
CMD ["npm", "start"]
