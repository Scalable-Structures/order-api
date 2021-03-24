require('dotenv').config();

const {
  VERSION = '1.0.0',
  NODE_ENV = 'development',
  HOST = 'localhost',
  PORT = '3333',

  DB_CLIENT_DEV,
  DB_HOST_DEV,
  DB_PORT_DEV,
  DB_USER_DEV,
  DB_PASSWORD_DEV,
  DB_DATABASE_DEV,

  DB_CLIENT_TEST,
  DB_FILENAME_TEST,

  DB_CLIENT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

module.exports = {
  VERSION,
  NODE_ENV,
  HOST,
  PORT,
  
  DB_CLIENT_DEV,
  DB_HOST_DEV,
  DB_PORT_DEV,
  DB_USER_DEV,
  DB_PASSWORD_DEV,
  DB_DATABASE_DEV,

  DB_CLIENT_TEST,
  DB_FILENAME_TEST,

  DB_CLIENT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
};