const express = require('express');

const ProductsService = require('../services/products');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.findAll();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.createProduct(body);
  res.json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.updateProduct(id, body);
  res.json(product);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.updateProduct(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = service.deleteProduct(id);
  res.json(deleted);
});

module.exports = router;
