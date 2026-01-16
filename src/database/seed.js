const db = require('./db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL
    )
  `);

  const stmt = db.prepare(
    'INSERT INTO products (name, category, price) VALUES (?, ?, ?)'
  );

  const products = [
    ['Notebook Dell', 'Eletrônicos', 4500],
    ['Mouse Logitech', 'Eletrônicos', 150],
    ['Teclado Mecânico', 'Eletrônicos', 350],
    ['Cadeira Gamer', 'Móveis', 1200],
    ['Mesa Escritório', 'Móveis', 900],
    ['Fone Bluetooth', 'Eletrônicos', 250],
    ['Monitor 24"', 'Eletrônicos', 1100],
    ['Livro Clean Code', 'Livros', 120],
    ['Livro Node.js', 'Livros', 95],
    ['Suporte Notebook', 'Acessórios', 80]
  ];

  products.forEach(p => stmt.run(p));

  stmt.finalize();

  console.log('Banco populado com sucesso!');
});

db.close();
