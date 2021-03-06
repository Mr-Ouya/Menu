var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var Review = sequelize.define("Review", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        item: {
            type: DataTypes.STRING,
            null: false

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
        }, createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
    Review.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Review.belongsTo(models.Account, {
            foreignKey: {
                allowNull: false
            },
            as: "revAccount"
        });
        Review.belongsTo(models.Items, {
            foreignKey: {
                allowNull: false
            },
            as: "revBelongsI"
        });

    };
    return Review


};