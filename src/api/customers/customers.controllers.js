const CustomerBusiness = require('./customers.business');
const { CREATED } = require('http-status');

class CustomerController {
  constructor (business = CustomerBusiness) {
    this.business = business;
  }

  async list (request, h) {
    return this.business.list();
  }

  find (request, h) {
    const { params: { id } } = request;
    return this.business.find(id);
  }

  create (request, h) {
    const { payload } = request;
    return this.business.create(payload);
  }

  update (request, h) {
    const { params: { id }, payload } = request;
    return this.business.update(id, payload);
  }

  async delete (request, h) {
    const { params: { id } } = request;
    await this.business.delete(id);

    return h.response().code(CREATED);
  }
}

module.exports = new CustomerController();