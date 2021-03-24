const basePath = '/customers';

module.exports = [
  {
    method: 'GET',
    path: `${basePath}`,
    handler: function (request, h) {
      return `${basePath}`;
    }
  },
  {
    method: 'GET',
    path: `${basePath}/{id}`,
    handler: function (request, h) {
      return `${basePath}/{id}`;
    }
  },
  {
    method: 'POST',
    path: `${basePath}`,
    handler: function (request, h) {
      return `${basePath}`;
    }
  },
  {
    method: 'PUT',
    path: `${basePath}/{id}`,
    handler: function (request, h) {
      return `${basePath}/{id}`;
    }
  },
  {
    method: 'DELETE',
    path: `${basePath}/{id}`,
    handler: function (request, h) {
      return `${basePath}/{id}`;
    }
  }
];