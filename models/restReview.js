var Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {


    var RestReview = sequelize.define("restreview", {

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
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        RestReview.belongsTo(models.resturants, {
            foreignKey: {
                allowNull: false
            },
            as: "restRev"
        });
        RestReview.belongsTo(models.account, {
            foreignKey: {
                allowNull: false
            },
            as: "reviewBA"
        });
    };
    return RestReview


};