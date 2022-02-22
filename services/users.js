//const boom = require('@hapi/boom');
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class UsersService {
  constructor() {}

  async createUser(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findUser() {
    const users = await models.User.findAll({
      include: ['customer'],
    });
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async updateUser(id, changes) {
    const user = await this.findOne(id);
    const userToUpdate = await user.update(changes);
    return userToUpdate;
  }

  async deleteUser(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UsersService;
