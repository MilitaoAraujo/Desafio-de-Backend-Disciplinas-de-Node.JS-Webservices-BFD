```md
# API de Produtos

API REST simples desenvolvida em Node.js com Express e SQLite.
Possui um front-end básico para consumir a API.

## Tecnologias
- Node.js
- Express
- SQLite
- HTML, CSS e JavaScript

## Como rodar

1. Instalar dependências:
npm install

2. Criar e popular o banco:
npm run seed

3. Iniciar o servidor:
npm run dev

Acesse:
http://localhost:3000

## Rotas da API

GET /api/products  
GET /api/products/:id  
GET /api/products/category/search?category=Eletrônicos  
GET /api/products/price/search?min=100&max=1000

## Observações
- Retorna JSON
- Retorna 404 para rotas ou produtos inexistentes
```
