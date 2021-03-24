'use strict';

const Hapi = require('@hapi/hapi');
const HapiRouter = require('hapi-router');
const Env = require('./env.config');

class Server {
  constructor() {
    this._server = Hapi.server({
        port: Env.PORT,
        host: Env.HOST
    });
  }


  async plugins() {
    try {
      await this._server.register({
        plugin: HapiRouter,
        options: {
          routes: 'src/api/**/*.routes.js'
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async start() {
    await this.plugins();
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