const CustomerRepository = require('./customers.repositories');
const Boom = require('@hapi/boom');

class CustomerBusiness {
  constructor (repository = CustomerRepository) {
    this.repository = repository;
  }

  async list () {
    return this.repository.all();
  }

  async find (id) {
    const customer = await this.repository.findById(id);

    if (!customer) {
      throw Boom.notFound();
    }

    return customer;
  }

  async create (payload) {
    const customer = await this.repository.create(payload);
    delete customer.password;

    return customer;
  }

  async update (id, payload) {
    await this.find(id);

    const customer = await this.repository.update(id, payload);
    delete customer.password;

    return customer;
  }

  async delete (id) {
    await this.find(id);
    await this.repository.delete(id);
  }
}

module.exports = new CustomerBusiness();