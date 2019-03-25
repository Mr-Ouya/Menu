var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var Items = sequelize.define("Items", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        item: {
            type: DataTypes.STRING(225),
            null: false
        },

        rating: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue : [0]
        },

        comments: {
            type: DataTypes.STRING(255),
        },

        information: {

            type: DataTypes.TEXT,
            null: false
        },

        category: {

            type: DataTypes.STRING(255),
        },
        price: {

            type: DataTypes.INTEGER(255),
            null: false
        },
        createdBy: {

            type: DataTypes.STRING(255),
            defaultValue: "Anonymous",
            null: false
        },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });


    Items.associate = function (models) {

        Items.belongsTo(models.Resturants, {
            foreignKey: {
                allowNull: false,
                defaultValue: 0

            }
        });


        Items.hasMany(models.Review, {
            foreignKey: {
                allowNull: true,

            },

            as: "itemReview"
        })

    };
    return Items


};