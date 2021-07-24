const OrderRepository = require('./orders.repositories');
const OrderItemRepository = require('./ordersItems.respositories');
const OrderQueue = require('./orders.queue');
const Env = require('../../config/env.config')
const Boom = require('@hapi/boom');
const Moment = require('moment');

class OrderBusiness {
  constructor(
    orderRepository = OrderRepository,
    orderItemRepository = OrderItemRepository,
    orderQueue = OrderQueue
  ) {
    this.orderRepository = orderRepository;
    this.orderItemRepository = orderItemRepository;
    this.orderQueue = orderQueue;
  }

  async list(params) {
    return this.orderRepository.all(params);
  }

  async find(id) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw Boom.notFound();
    }

    return order;
  }

  _serializePayload(payload) {
    const { 
      status = 'PENDING_PAYMENT',
      amount = 0,
      ...rest
    } = payload;
    
    return {
      date: Moment().format('YYYY-MM-DD HH:mm:ss'),
      status,
      amount,
      ...rest
    };
  }

  async create(payload) {
    const _payload = this._serializePayload(payload);

    if (Env.ENABLED_QUEUE) {
      await this.orderQueue.create(_payload);

      return {
        message: 'Order is being processed',
        data: _payload
      }
    }

    const { items, ...orderPayload } = _payload;
    const order = await this.orderRepository.create(orderPayload);
    const [...createdItems] = await Promise.all(items.map(async (item) => {
      return this.orderItemRepository.create(order.id, item);
    }));
    
    return {
      ...order,
      items: createdItems
    };
  }

  async update(id, payload) {
    const { id: orderId, date, status } = await this.find(id);
    const { 
      customer: { id: customer_id },
      items
    } = payload;

    await this.orderItemRepository.deleteAll(id);
    const [...createdItems] = await Promise.all(items.map(async (item) => {
      return this.orderItemRepository.create(orderId, item);
    }));

    const totalValue = createdItems.reduce((acc, item) => acc + item.value, 0);
    const orderUpdated = await this.simpleUpdate(orderId, { customer_id, value: totalValue });

    return {
      id: orderId,
      ...orderUpdated,
      date,
      status,
      value: totalValue,
      items: createdItems,
    };
  }

  async simpleUpdate(id, payload) {
    await this.find(id);
    return await this.orderRepository.simpleUpdate(id, payload);
  }

  async delete(id) {
    await this.find(id);  
    await this.orderRepository.delete(id);
  }
}

module.exports = new OrderBusiness();