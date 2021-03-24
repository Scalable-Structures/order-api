
exports.up = function(knex) {
  return knex.schema
    .createTable('orders_items', (table) => {
      table.increments();
      table.integer('order_id').unsigned().notNullable();
      table.integer('product_id').unsigned().notNullable();
      table.integer('quantity').unsigned().notNullable();
      table.decimal('value', 11, 2).notNullable();

      table.foreign('order_id').references('id').inTable('orders');
      table.foreign('product_id').references('id').inTable('products');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orders_items');
};
