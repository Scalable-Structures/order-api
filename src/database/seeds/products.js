
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Playstation 4', value: 2500, quantity: 1000000},
        {name: 'Playstation 4 Pro', value: 3000, quantity: 1000000},
        {name: 'Playstation 5', value: 4700, quantity: 1000000},
        {name: 'Xbox One', value: 2300, quantity: 1000000},
        {name: 'Xbox Series S', value: 2980, quantity: 1000000},
        {name: 'Xbox Series X', value: 4700, quantity: 1000000},
        {name: 'God of War 3', value: 70, quantity: 1000000},
        {name: 'God of War', value: 70, quantity: 1000000},
        {name: 'The Last of Us', value: 70, quantity: 1000000},
        {name: 'The Last of Us 2', value: 70, quantity: 1000000},
        {name: 'Uncharted Collection', value: 70, quantity: 1000000},
        {name: 'Uncharted 4', value: 70, quantity: 1000000},
        {name: 'Days Gone', value: 70, quantity: 1000000},
        {name: 'Demon\'s Souls', value: 70, quantity: 1000000},
        {name: 'Gears of War 4', value: 70, quantity: 1000000},
        {name: 'Gears of War 5', value: 70, quantity: 1000000},
        {name: 'Halo 5 ', value: 70, quantity: 1000000},
        {name: 'Halo: The Master Chief Collection', value: 0, quantity: 1000000}
      ]);
    });
};
