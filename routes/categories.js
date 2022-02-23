const express = require('express');

const CategoryService = require('./../services/categories');
const validatorHandler = require('./../middleware/validatorHandler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('./../schemas/categories');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.findCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findCategory(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.createCategory(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.updateCategory(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteCategory(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
