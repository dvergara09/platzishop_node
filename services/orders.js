const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrdersService {
  constructor() {}

  async createOrder(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async findOrders() {
    const orders = await models.Order.findAll({
      include: ['customer'],
    });
    return orders;
  }

  async findOrder(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async updateOrder(id, changes) {
    const order = await this.findOrder(id);
    const orderToUpdate = await order.update(changes);
    return orderToUpdate;
  }

  async deleteOrder(id) {
    const order = await this.findOrder(id);
    await order.destroy(id);
    return { id };
  }
}

module.exports = OrdersService;
