module.exports = function(sequelize, dataTypes) {
    var UserInput = sequelize.define('UserInput', {
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
        UserInput.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
        UserInput.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return UserInput;
};
