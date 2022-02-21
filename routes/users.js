const express = require('express');
const UsersService = require('../services/users');
const validatorHandler = require('./../middleware/validatorHandler');

const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('./../schemas/user');
const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.findAll();
  res.json(users);
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'params'),
  async (req, res) => {
    const body = req.body;
    const newUser = await service.createUser(body);
    res.status(201).json(newUser);
  }
);

router.patch(
  '/:id',
  validatorHandler(updateUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.updateUser(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(updateUserSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const user = await service.updateUser(id, body);
    res.json(user);
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.deleteUser(id);
  res.json(deleted);
});

module.exports = router;
