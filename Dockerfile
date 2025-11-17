# Базовый образ
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Установка зависимостей
COPY package*.json ./
RUN npm install --production

# Копируем исходники
COPY . .

# Сборка NestJS
RUN npm run build

# Запуск
CMD ["node", "dist/main.js"]