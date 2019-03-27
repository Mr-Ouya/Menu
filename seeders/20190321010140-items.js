'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [{
      item: 'McJrs',
      rating: 3,
      information: "some good shit litterally",
      price: 1.99,
      foodType: "FastFood",
      createdBy: "Admin",
      resturantId: 1

    }, {
      item: 'esefews',
      rating: 3,
      information: "some good shit litterally",
      price: 1.99,
      createdBy: "Admin",
      resturantId: 1

    }, {
      item: 'fesfs',
      rating: 3,
      information: "some good shit litterally",
      price: 1.99,
      createdBy: "Admin",
      resturantId: 1

    }, {
      item: 'fsfe',
      rating: 3,
      information: "some good shit litterally",
      price: 1.99,
      createdBy: "Admin",
      resturantId: 1

    }, {
      item: 'fsefsefsfe',
      rating: 3,
      information: "some good shit litterally",
      price: 1.99,
      createdBy: "Admin",
      resturantId: 1

    }]);

  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('items', null, {});

  }

};
