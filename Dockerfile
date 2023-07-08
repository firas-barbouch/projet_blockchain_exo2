FROM node:16
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g truffle
RUN mkdir -p build/contracts
RUN truffle compile
CMD ["node", "index.js"]

