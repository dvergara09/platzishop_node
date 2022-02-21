//const boom = require('@hapi/boom');
const pool = require('./../libs/postgresPool');

class UsersService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async createUser(data) {
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

  async updateUser(id, changes) {
    return { id, changes };
  }

  async deleteUser(id) {
    return { id };
  }
}

module.exports = UsersService;
