'use strict';

const Hapi = require('@hapi/hapi');
const Env = require('./env.config')

class Server {
  constructor() {
    this._server = Hapi.server({
        port: Env.PORT,
        host: Env.HOST
    });
  }

  async start() {
    await this._server.start();
    console.log('Server running on %s', this._server.info.uri);

    process.on('unhandledRejection', (err) => {
      console.log(err);
      process.exit(1);
    });    
  }
}

exports.Server = Server;
module.exports = new Server;