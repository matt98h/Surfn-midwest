module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('Location', {
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
        Location.hasMany(models.UserInput,  {
            onDelete: "cascade"
        }) 
    }
    return Location;
}

