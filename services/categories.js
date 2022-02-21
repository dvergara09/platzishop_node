//const boom = require('@hapi/boom');
const pool = require('./../libs/postgresPool');

class CategoriesService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async createCategory(data) {
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

  async updateCategory(id, changes) {
    return { id, changes };
  }

  async deleteCategory(id) {
    return { id };
  }
}

module.exports = CategoriesService;
