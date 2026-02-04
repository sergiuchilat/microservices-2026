# Imaginea de bază Node.js
FROM node:18-alpine

# Setarea directorului de lucru
WORKDIR /usr/src/app

# Copierea fișierelor de dependințe
COPY package*.json ./

# Instalarea dependențelor
RUN npm install

# Copierea sursei codului
COPY . .

# Build-ul aplicației
RUN npm run build

# Comanda de start
CMD ["npm", "run", "start:prod"]