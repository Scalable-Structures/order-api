const ProductRepository = require('./products.repositories');
const Boom = require('@hapi/boom');

class ProductBusiness {
  constructor (repository = ProductRepository) {
    this.repository = repository;
  }

  async list () {
    return this.repository.all();
  }

  async find (id) {
    const product = await this.repository.findById(id);

    if (!product) {
      throw Boom.notFound();
    }

    return product;
  }

  async create (payload) {
    return this.repository.create(payload);
  }

  async update (id, payload) {
    await this.find(id);
    return this.repository.update(id, payload);
  }

  async delete (id) {
    await this.find(id);
    await this.repository.delete(id);
  }
}

module.exports = new ProductBusiness();