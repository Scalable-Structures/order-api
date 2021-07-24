const OrderBusiness = require('./orders.business');
const { CREATED } = require('http-status');

class OrdersController {
  constructor (business = OrderBusiness) {
    this.business = business;
  }

  async list (request, h) {
    const { query: params } = request;
    return this.business.list(params);
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

module.exports = new OrdersController();