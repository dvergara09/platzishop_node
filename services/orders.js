//const boom = require('@hapi/boom');

class OrdersService {
  constructor() {}

  async createOrder(data) {
    return data;
  }

  async findAll() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async updateOrder(id, changes) {
    return { id, changes };
  }

  async deleteOrder(id) {
    return { id };
  }
}

module.exports = OrdersService;
