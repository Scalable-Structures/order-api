
exports.up = function(knex) {
  return knex.schema
    .createTable('products', (table) => {
      table.increments();
      table.string('name', 255).notNullable();
      table.decimal('value', 11, 2).notNullable();
      table.integer('quantity').unsigned().notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('products');
};
