
exports.seed = function(knex) {
  return knex('customers').del()
    .then(function () {
      const customers = new Array(1000);

      for (let index = 0; index < customers.length; index++) {
        const customerNumber = index + 1;

        customers[index] = {
          id: customerNumber, 
          name: `Fulano ${customerNumber}`, 
          email: `fulano${customerNumber}@gmail.com`, 
          password: '123456'
        };
      }

      return knex('customers').insert(customers);
    });
};
