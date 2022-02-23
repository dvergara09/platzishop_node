const express = require('express');

const ProductsService = require('../services/products');
const validatorHandler = require('./../middleware/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product');
const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.findProducts();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = await service.findProduct(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.createProduct(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(updateProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.updateProduct(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(updateProductSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = await service.updateProduct(id, body);
    res.json(product);
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.deleteProduct(id);
  res.json(deleted);
});

module.exports = router;
