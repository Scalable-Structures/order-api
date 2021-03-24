const Env = require('./src/config/env.config');

module.exports = {

  development: {
    client: Env.DB_CLIENT_DEV,
    connection: {
      host: Env.DB_HOST_DEV,
      port: Env.DB_PORT_DEV,
      user: Env.DB_USER_DEV,
      password: Env.DB_PASSWORD_DEV,
      database: Env.DB_DATABASE_DEV,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  test: {
    client: Env.DB_CLIENT_TEST,
    connection: {
      filename: Env.DB_FILENAME_TEST,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  production: {
    client: Env.DB_CLIENT,
    connection: {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      user: Env.DB_USER,
      password: Env.DB_PASSWORD,
      database: Env.DB_DATABASE,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  }

};