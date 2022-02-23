const express = require('express');
const CustomersService = require('../services/customers');
const validatorHandler = require('./../middleware/validatorHandler');

const {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
} = require('./../schemas/customers');

const router = express.Router();
const service = new CustomersService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.findCustomers();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findCustomer(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCustomer = await service.createCustomer(body);
    res.status(201).json(newCustomer);
  }
);

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.updateCustomer(id, body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(updateCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const customer = await service.updateCustomer(id, body);
    res.json(customer);
  }
);

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteCustomer(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
