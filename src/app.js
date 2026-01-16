const express = require('express');
const path = require('path');
const app = express();

const productRoutes = require('./routes/products.routes');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
