'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [{
      item: 'McJrs',
      rating: 3,
      information: "some good shit litterally",
      price:1.99,
      createdBy: "Admin",
      resturantId: 1

    }]),
    queryInterface.bulkInsert('items', [{
      item: 'esefews',
      rating: 3,
      information: "some good shit litterally",
      price:1.99,
      createdBy: "Admin",
      resturantId: 1

    }], {}),
    queryInterface.bulkInsert('items', [{
      item: 'fesfs',
      rating: 3,
      information: "some good shit litterally",
      price:1.99,
      createdBy: "Admin",
      resturantId: 1

    }], {}),
    queryInterface.bulkInsert('items', [{
      item: 'fsfe',
      rating: 3,
      information: "some good shit litterally",
      price:1.99,
      createdBy: "Admin",
      resturantId: 1

    }], {}),
    queryInterface.bulkInsert('items', [{
      item: 'fsefsefsfe',
      rating: 3,
      information: "some good shit litterally",
      price:1.99,
      createdBy: "Admin",
      resturantId: 1

    }], {});
  
  },


};
