const basePath = '/auth';

module.exports = [
  {
    method: 'GET',
    path: `${basePath}/me`,
    handler: function (request, h) {
      return `${basePath}/me`;
    }
  },
  {
    method: 'POST',
    path: `${basePath}`,
    handler: function (request, h) {
      return `${basePath}`;
    }
  }
];