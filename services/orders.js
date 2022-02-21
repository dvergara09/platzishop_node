//const boom = require('@hapi/boom');
const pool = require('./../libs/postgresPool');

class OrdersService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async createOrder(data) {
    return data;
  }

  async findAll() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
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
