var Sequelize = require("sequelize")
module.exports = function (sequelize, DataTypes) {


    var Account = sequelize.define("Account", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        username: {
            type: DataTypes.STRING(50),
            null: false
        },

        password: {
            type: DataTypes.STRING(255),
            null: false


        },
        email: {
            type: DataTypes.STRING(100),
            null: false
        },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }

    });
    Account.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Account.hasMany(models.Review, {
            foreignKey: "UserId"
        });
    };
    return Account

}


