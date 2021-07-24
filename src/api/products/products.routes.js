const ProductController = require('./products.controllers');
const Schemas = require('./products.schemas');
const { failAction } = require('../../commons/errors');

const basePath = '/products';

module.exports = [
  {
    method: 'GET',
    path: `${basePath}`,
    handler: ProductController.list.bind(ProductController)
  },
  {
    method: 'GET',
    path: `${basePath}/{id}`,
    handler: ProductController.find.bind(ProductController)
  },
  {
    method: 'POST',
    path: `${basePath}`,
    handler: ProductController.create.bind(ProductController),
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
    handler: ProductController.update.bind(ProductController),
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
    handler: ProductController.delete.bind(ProductController)
  }
];