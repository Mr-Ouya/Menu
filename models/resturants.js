module.exports = function (sequelize, DataTypes) {


    var Resturants = sequelize.define("resturants", {

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
            type: DataTypes.TEXT(long),
            null: false
        },

    });

    Resturants.associate = function (models) {
        Resturants.belongsToMany(models.Items, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Resturants


};