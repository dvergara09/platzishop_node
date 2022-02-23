const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class CategoriesService {
  constructor() {}

  async createCategory(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async findCategories() {}

  async findCategory(id) {
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
