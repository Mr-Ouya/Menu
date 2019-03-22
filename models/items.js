var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var Items = sequelize.define("items", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        item: {
            type: DataTypes.STRING,
            null: false
        },

        rating: {
            type: DataTypes.STRING(50),
            null: false
        },

        comments: {
            type: DataTypes.STRING(255),


        },

        information: {

            type: DataTypes.TEXT,
            null: false
        },

        categories: {

            type: DataTypes.STRING(255),
        },
        price: {

            type: DataTypes.INTEGER(255),
            null: false
        },
        createdBy: {

            type: DataTypes.STRING(255),
            null: false
        },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });


    Items.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Items.belongsTo(models.resturants, {
            foreignKey: {
                allowNull: false
            },
            as: "itemB"
        });

    
        Items.hasMany(models.review, {
            foreignKey:{
                allowNull : false
            },
            as : "itemReview"
        })

    };
    return Items


};