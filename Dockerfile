#image base node.js légère
FROM node:18-alpine AS builder

#répertoire de travail
WORKDIR /app

#copie package.json et package-lock.json
COPY package*.json ./

#install des dépendances
RUN npm ci --only=production
#ignore les dependences

#copie tout les codes sources
COPY . .


RUN npm run build

#image production
FROM nginx:alpine

#copie les fichier bildés vers nginx
COPY --from=builder /app/dist /usr/share/nginx/html

#port 80
EXPOSE 80

#démarer nginx
CMD ["nginx", "-g", "daemon off;"]

