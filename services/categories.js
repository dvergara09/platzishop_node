const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class CategoriesService {
  constructor() {}

  async createCategory(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async findCategories() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findCategory(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products'],
    });
    if (!category) {
      throw boom.notFound('user not found');
    }
    return category;
  }

  async updateCategory(id, changes) {
    const category = await this.findCategory(id);
    const categoryToUpdate = await category.update(changes);
    return categoryToUpdate;
  }

  async deleteCategory(id) {
    const category = await this.findCategory(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoriesService;
