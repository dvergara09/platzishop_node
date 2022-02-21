//const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

class UsersService {
  constructor() {}

  async createUser(data) {
    return data;
  }

  async findAll() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM tasks');
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
