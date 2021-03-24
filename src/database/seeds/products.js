
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Playstation 4', value: 2500, quantity: 1000000},
        {id: 2, name: 'Playstation 4 Pro', value: 3000, quantity: 1000000},
        {id: 3, name: 'Playstation 5', value: 4700, quantity: 1000000},
        {id: 4, name: 'Xbox One', value: 2300, quantity: 1000000},
        {id: 5, name: 'Xbox Series S', value: 2980, quantity: 1000000},
        {id: 6, name: 'Xbox Series X', value: 4700, quantity: 1000000},
        {id: 7, name: 'God of War 3', value: 70, quantity: 1000000},
        {id: 8, name: 'God of War', value: 70, quantity: 1000000},
        {id: 9, name: 'The Last of Us', value: 70, quantity: 1000000},
        {id: 10, name: 'The Last of Us 2', value: 70, quantity: 1000000},
        {id: 11, name: 'Uncharted Collection', value: 70, quantity: 1000000},
        {id: 12, name: 'Uncharted 4', value: 70, quantity: 1000000},
        {id: 13, name: 'Days Gone', value: 70, quantity: 1000000},
        {id: 14, name: 'Demon\'s Souls', value: 70, quantity: 1000000},
        {id: 15, name: 'Gears of War 4', value: 70, quantity: 1000000},
        {id: 16, name: 'Gears of War 5', value: 70, quantity: 1000000},
        {id: 17, name: 'Halo 5 ', value: 70, quantity: 1000000},
        {id: 18, name: 'Halo: The Master Chief Collection', value: 0, quantity: 1000000}
      ]);
    });
};
