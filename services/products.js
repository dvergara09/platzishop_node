const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class ProductsService {
  constructor() {
    this.generate();
  }

  generate() {}

  async createProduct(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async findProducts(query) {
    const options = {
      include: ['category'],
    };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findProduct(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async updateProduct(id, changes) {
    const product = await this.findProduct(id);
    const productToUpdate = await product.update(changes);
    return productToUpdate;
  }

  async deleteProduct(id) {
    const product = await this.findProduct(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
