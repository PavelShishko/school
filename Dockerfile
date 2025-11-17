# Базовый образ
FROM node:18-alpine

# Рабочая директория
WORKDIR /src

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копируем исходники
COPY . .

# Сборка NestJS
RUN npm run build

# Запуск
CMD ["node", "dist/main.js"]