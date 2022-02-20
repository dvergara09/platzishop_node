const express = require('express');

const ProductsService = require('../services/products');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.findAll();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.createProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.updateProduct(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.updateProduct(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.deleteProduct(id);
  res.json(deleted);
});

module.exports = router;
