module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('location', {
        locationName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Location.associate = function (models) { 
        Location.hasMany(models.userInput, )
    }
    return Location;
}

