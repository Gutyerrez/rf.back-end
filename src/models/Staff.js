'use strict';

module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('website_staff', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: [{
                model: 'server_user',
                key: 'id',
                attributes: [
                    'name',
                    'display_name'
                ]
            }]
        }
    });

    Staff.associate = (models) => {
        Staff.belongsTo(models.server_user, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    return Staff;
}