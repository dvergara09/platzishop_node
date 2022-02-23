const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CustomersService {
  constructor() {}

  async createCustomer(data) {
    const newCustomer = await models.Customer.create(data, { include: 'user' });
    return newCustomer;
  }

  async findCustomers() {
    const customers = await models.Customer.findAll({
      include: ['user'],
    });
    return customers;
  }

  async findCustomer(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async updateCustomer(id, changes) {
    const customer = await this.findOne(id);
    const customerToUpdate = await customer.update(changes);
    return customerToUpdate;
  }

  async deleteCustomer(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomersService;
