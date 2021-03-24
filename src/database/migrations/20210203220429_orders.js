
exports.up = function(knex) {
  return knex.schema
    .createTable('orders', (table) => {
      table.increments();
      table.integer('customer_id').unsigned().notNullable();
      table.datetime('date').notNullable();
      table.integer('status').unsigned().notNullable();
      table.decimal('value', 11, 2).notNullable();

      table.foreign('customer_id').references('id').inTable('customers');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orders');
};
