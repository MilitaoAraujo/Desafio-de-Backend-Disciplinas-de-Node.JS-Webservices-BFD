# API de Produtos – Node.js

Projeto simples de **API REST** desenvolvido em **Node.js + Express**, utilizando **SQLite** como banco de dados e um **front-end básico** para consumo da API.

---

## Tecnologias

* Node.js
* Express.js
* SQLite
* HTML, CSS e JavaScript

---

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Crie e popule o banco de dados:

```bash
npm run seed
```

3. Inicie o servidor:

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

## Rotas da API

* Listar produtos

```
GET /api/products
```

* Buscar produto por ID

```
GET /api/products/:id
```

* Buscar por categoria

```
GET /api/products/category/search?category=Eletrônicos
```

* Buscar por faixa de preço

```
GET /api/products/price/search?min=100&max=1000
```

---

## Front-end

O front-end é acessado em:

```
http://localhost:3000
```

Ele consome a API e permite visualizar e filtrar os produtos.

---

## Observações

* A API retorna **404** para rotas inexistentes ou produtos não encontrados.
* O banco é populado automaticamente com dados de teste.
