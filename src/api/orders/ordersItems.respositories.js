const Database = require('../../config/database.config');
const ProductRepository = require('../products/products.repositories');

class OrderItemsRepository {
  constructor(
    queryBuilder = Database.getKnex(),
    productRepository = ProductRepository
  ) {
    this.qb = queryBuilder;
    this.tableName = 'orders_items';
    this.productRepository = productRepository;
  }

  async all (order_id) {  
    return this.qb
      .select()
      .from(this.tableName)
      .where({ order_id });
  }

  async findById (order_id, id) {  
    const [ orderItem ] = await this.qb
      .select()
      .from(this.tableName)
      .where({ order_id, id });

    return orderItem;
  }

  async create (order_id, payload) {
    const { product: { id: product_id }, quantity, unitValue } = payload;
    const product = await this.productRepository.findById(product_id);
    const item = {
      order_id, 
      product_id: product.id,  
      quantity, 
      unit_value: unitValue 
    };

    const [ id ] = await this.qb
      .insert(item)
      .into(this.tableName);

    await this.productRepository.update(product.id, {
      ...product,
      quantity: product.quantity - quantity
    });

    return { 
      id, 
      product: {
        id: product.id,
        name: product.name
      }, 
      quantity: item.quantity, 
      value: item.value 
    }; 
  }

  async delete (order_id, id) {
    const orderItem = await this.findById(order_id, id);
    const product = await this.productRepository.findById(orderItem.product_id);

    await this.productRepository.update(product.id, {
      ...product,
      quantity: product.quantity + orderItem.quantity
    })

    await this.qb(this.tableName)
      .where({ id, order_id  })
      .del();
  }

  async deleteAll(order_id) {
    await this.qb(this.tableName)
      .where({ order_id  })
      .del();
  }
}

module.exports = new OrderItemsRepository();