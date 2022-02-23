const boom = require('@hapi/boom');
const { Op } = require('sequelize');
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
      where: {},
    };

    const { limit, offset } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if (price) {
      options.where.price = price;
    }

    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
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
