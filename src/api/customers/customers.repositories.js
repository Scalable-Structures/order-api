const Database = require('../../config/database.config');

class CustomerRepository {
  constructor(queryBuilder = Database.getKnex()) {
    this.qb = queryBuilder;
    this.tableName = 'customers';
  }

  async all () {  
    return this.qb
      .select()
      .from(this.tableName);
  }

  async findById (id) {
    const [ customer ] = await this.qb
      .select()
      .from(this.tableName)
      .where('id', id);
    
    return customer;
  }

  async create (payload) {
    const [ id ] = await this.qb
      .insert(payload)
      .into(this.tableName);

    return { id, ...payload }; 
  }
 
  async update (id, payload) {
    await this.qb(this.tableName)
      .where({ id })
      .update(payload);

    return { id, ...payload };
  }

  async delete (id) {
    await this.qb(this.tableName)
      .where({ id })
      .del();
  }
}

module.exports = new CustomerRepository();