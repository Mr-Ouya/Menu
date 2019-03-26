var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var RestReview = sequelize.define("RestReview", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        ratings: {
            type: DataTypes.STRING(50),
            null: false
        },

        comments: {
            type: DataTypes.STRING(255),
            null: false

        },

        createdBy: {

            type: DataTypes.STRING(255),
            null: false
        },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });

    ;
    RestReview.associate = function (models) {
        RestReview.belongsTo(models.Resturants, {
            foreignKey: {
                allowNull: false
            },
            as: "restRev"
        });
        RestReview.belongsTo(models.Account, {
            foreignKey: {
                allowNull: false
            },
            as: "reviewBA"
        });
    };
    return RestReview


};