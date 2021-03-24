const knex = require('knex');
const config = require('./env.config');
const knexConfig = require('../../knexfile');

class Database {
    constructor() {
        this.knex = null;
    }

    getKnex() {
        try {
            if (!this.knex) {
                this.knex = knex(knexConfig[config.NODE_ENV]);
            }
    
            return this.knex;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

exports.Database = Database;
module.exports = new Database();