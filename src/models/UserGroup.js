'use strict';

module.exports = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('server_user_group', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'server_user',
                key: 'id'
            }
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'server_group',
                key: 'id'
            }
        },
        server_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        end_time: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
    
    UserGroup.associate = (models) => {
        UserGroup.belongsTo(models.server_group, {
            foreignKey: 'group_id',
            as: 'fancy_group'
        });
    };

    return UserGroup;
}