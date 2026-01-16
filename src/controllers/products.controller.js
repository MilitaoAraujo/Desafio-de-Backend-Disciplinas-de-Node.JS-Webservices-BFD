const db = require('../database/db');

exports.getAllProducts = (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
    res.json(rows);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (!row) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(row);
  });
};

exports.getProductsByCategory = (req, res) => {
  const { category } = req.query;

  db.all(
    'SELECT * FROM products WHERE category = ?',
    [category],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }
      res.json(rows);
    }
  );
};

exports.getProductsByPrice = (req, res) => {
  const { min, max } = req.query;

  db.all(
    'SELECT * FROM products WHERE price BETWEEN ? AND ?',
    [min, max],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }
      res.json(rows);
    }
  );
};
