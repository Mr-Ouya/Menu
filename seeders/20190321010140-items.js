'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [{
      name: 'McJrs',
      rating: 3,
      location: "2255 Erin Mills Pkwy, Mississauga, ON L5K 1T9",
      information: "some good shit litterally",
      resturantId:1
    }]),
      queryInterface.bulkInsert('resturants', [{
        name: "Montana's",
        rating: 3,
        location: "60 Courtneypark Dr E, Mississauga, ON L5T 2Y3 ",
        information: "mountainy",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Subway',
        rating: 3,
        location: "2150 Burnhamthorpe Rd W H24, Mississauga, ON L5L 3A2",
        information: "goods but not good enough",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Namaste Tandoori Restaurant, Fish & Chips',
        rating: 3,
        location: "5425 Creditview Rd, Mississauga, ON L5V 2P3",
        information: "chicken stuuf ",
      }], {}),
      queryInterface.bulkInsert('resturants', [{
        name: 'Krazzy Gyro',
        rating: 3,
        location: "2121 Dundas St E, Mississauga, ON L4X 1M3",
        information: "some good shit litterally",
      }], {});


  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
