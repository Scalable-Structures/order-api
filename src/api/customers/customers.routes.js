const CustomerController = require('./customers.controllers');
const Schemas = require('./customers.schemas');
const { failAction } = require('../../commons/errors');

const basePath = '/customers';

module.exports = [
  {
    method: 'GET',
    path: `${basePath}`,
    handler: CustomerController.list.bind(CustomerController)
  },
  {
    method: 'GET',
    path: `${basePath}/{id}`,
    handler: CustomerController.find.bind(CustomerController)
  },
  {
    method: 'POST',
    path: `${basePath}`,
    handler: CustomerController.create.bind(CustomerController),
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
    handler: CustomerController.update.bind(CustomerController),
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
    handler: CustomerController.delete.bind(CustomerController)
  }
];