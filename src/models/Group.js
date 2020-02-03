'use strict';

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('server_group', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prefix: {
            type: DataTypes.STRING,
            allowNull: false
        },
        suffix: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tab_list_order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discord_group_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        server_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Group.associate = (models) => {
        Group.hasOne(models.server_user_group, {
            foreignKey: 'id',
            as: 'user_group'
        });
    };

    return Group;
}