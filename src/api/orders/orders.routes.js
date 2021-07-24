const OrderController = require('./orders.controllers');
const Schemas = require('./orders.schemas');
const { failAction } = require('../../commons/errors');

const basePath = '/orders';

module.exports = [
  {
    method: 'GET',
    path: `${basePath}`,
    handler: OrderController.list.bind(OrderController)
  },
  {
    method: 'GET',
    path: `${basePath}/{id}`,
    handler: OrderController.find.bind(OrderController)
  },
  {
    method: 'POST',
    path: `${basePath}`,
    handler: OrderController.create.bind(OrderController),
    options: {
      validate: {
        payload: Schemas.payload,
        failAction
      }
    }
  },
  {
    method: 'PUT',
    path: `${basePath}/{id}`,
    handler: OrderController.update.bind(OrderController),
    options: {
      validate: {
        payload: Schemas.payload,
        failAction
      }
    }
  },
  {
    method: 'DELETE',
    path: `${basePath}/{id}`,
    handler: OrderController.delete.bind(OrderController)
  }
];