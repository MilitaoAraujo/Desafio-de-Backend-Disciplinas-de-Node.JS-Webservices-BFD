const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controller');

router.get('/products', controller.getAllProducts);
router.get('/products/:id', controller.getProductById);
router.get('/products/category/search', controller.getProductsByCategory);
router.get('/products/price/search', controller.getProductsByPrice);

module.exports = router;
