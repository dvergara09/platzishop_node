//const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {}

  async createCategory(data) {
    return data;
  }

  async findAll() {
    return [];
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
