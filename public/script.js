const API = 'http://localhost:3000/api';

const container = document.getElementById('products');

function render(products) {
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p>Nenhum produto encontrado</p>';
    return;
  }

  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Categoria:</strong> ${p.category}</p>
      <p><strong>Preço:</strong> R$ ${p.price}</p>
    `;
    container.appendChild(div);
  });
}

function loadProducts() {
  fetch(`${API}/products`)
    .then(res => res.json())
    .then(render);
}

function searchByCategory() {
  const category = document.getElementById('category').value;
  fetch(`${API}/products/category/search?category=${category}`)
    .then(res => res.json())
    .then(render);
}

function searchByPrice() {
  const min = document.getElementById('min').value;
  const max = document.getElementById('max').value;

  fetch(`${API}/products/price/search?min=${min}&max=${max}`)
    .then(res => res.json())
    .then(render);
}

loadProducts();
