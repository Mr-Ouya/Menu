'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('resturants', [{
      name: 'Mc Donalds',
      rating: 3,
      location: "Mississauga",
      foodType: "FastFood",
      information: "some good shit litterally",
    }]),
      queryInterface.bulkInsert('resturants', [{
        name: "Montana's",
        rating: 3,
        information: "mountainy",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Subway',
        rating: 3,
        information: "goods but not good enough",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Namaste Tandoori Restaurant, Fish & Chips',
        rating: 3,
        information: "chicken stuuf ",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Krazzy Gyro',
        rating: 3,
        information: "some good shit litterally",
      }], {});


  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resturants', null, {});

  }
};
