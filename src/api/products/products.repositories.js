const Database = require('../../config/database.config');

class ProductRepository {
  constructor(queryBuilder = Database.getKnex()) {
    this.qb = queryBuilder;
    this.tableName = 'products';
  }

  async all () {  
    return this.qb
      .select()
      .from(this.tableName);
  }

  async findById (id) {
    const [ product ] = await this.qb
      .select()
      .from(this.tableName)
      .where('id', id);
    
    return product;
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

module.exports = new ProductRepository();