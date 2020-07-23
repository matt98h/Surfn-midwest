const Sequelize = require('sequelize');

module.exports = function(Sequelize, dataTypes) {
    var userInput = sequelize.define('userInput', {
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
    userInput.associate = function(models) {
        userInput.hasOne(models.Location, {
            
        });
        userInput.hasOne(models.User, {
            
        })
    };
};
return userInput;