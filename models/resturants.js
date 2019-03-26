var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var Resturants = sequelize.define("Resturants", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        name: {
            type: DataTypes.STRING(50),
            null: false
        },

        rating: {
            type: DataTypes.STRING(255),
            null: false

        },
        location: {
            type: DataTypes.STRING(100),
            null: false
        },
        information: {
            type: DataTypes.TEXT,
            null: false
        },
        comments: {
            type: DataTypes.TEXT,

        }, createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });

    Resturants.associate = function (models) {
        Resturants.hasMany(models.Items, {
            foreignKey: {
                allowNull: false
            },
            as: "restItem"
        });
        Resturants.hasMany(models.Review, {
            foreignKey: {
                allowNull: false
            },
            as: "restRev"
        });
    };


    return Resturants


};