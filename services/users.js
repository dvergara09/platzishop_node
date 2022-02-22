//const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class UsersService {
  constructor() {}

  async createUser(data) {
    return data;
  }

  async findUser() {
    const users = await models.User.findAll();
    return users;
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
