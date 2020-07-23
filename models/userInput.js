module.exports = function(sequelize, dataTypes) {
    var UserInput = sequelize.define('userInput', {
        comment: {
            type: dataTypes.STRING,
            allowNull: true
        },
        radFactor: {
            type: dataTypes.TINYINT,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
    })
    UserInput.associate = function(models) {
        UserInput.hasOne(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
        UserInput.hasOne(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
};
return UserInput;