const Database = require('../../config/database.config');
const OrderItemRepository = require('./ordersItems.respositories');

class OrderRepository {
  constructor(
    queryBuilder = Database.getKnex(),
    orderItemRepo = OrderItemRepository
  ) {
    this.qb = queryBuilder;
    this.orderItemRepo = orderItemRepo;
    this.tableName = 'orders';
  }

  async all (params) {  
    const orders = await this.qb
      .select()
      .from(this.tableName)
      .where(params)
      .limit(5);

    return Promise.all(orders.map(async (order) => {
      const items = await this.orderItemRepo.all(order.id);

      return {
        ...order,
        items
      };
    }));
  }

  async findById (id) {
    const [ order ] = await this.qb
      .select()
      .from(this.tableName)
      .where('id', id);
    
    if (order) {
      order.items = await this.orderItemRepo.all(order.id);
    }

    return order;
  }

  async create (order) {
    const {
      customer: { id: customer_id },
      amount: value,
      ...rest
    } = order;

    const [ id ] = await this.qb
      .insert({
        ...rest,
        customer_id,
        value
      })
      .into(this.tableName);

    return { id, ...order }; 
  }
 
  async update (id, payload) {
    await this.qb(this.tableName)
      .where({ id })
      .update(payload);

    return { id, ...payload };
  }

  async simpleUpdate (id, payload) {
    await this.qb(this.tableName)
      .where({ id })
      .update(payload);

    return { id, ...payload };
  }

  async delete (id) {
    await this.orderItemRepo
      .deleteAll(id)

    await this.qb(this.tableName)
      .where({ id })
      .del();
  }
}

module.exports = new OrderRepository();