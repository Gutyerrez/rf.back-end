'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('server_user', {
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
        display_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unique_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discord_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        two_factor_authentication_enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        two_factor_authentication_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        first_login: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        last_login: {
            type: DataTypes.BIGINT,
            allowNull: true

        },
        last_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_lobby_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        language_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    User.associate = (models) => {
        User.hasOne(models.website_staff, {
            foreignKey: 'user_id',
            as: 'staff'
        });
        User.hasMany(models.server_user_group, {
            foreignKey: 'user_id',
            as: 'groups'
        });
        User.hasMany(models.server_punishment, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    return User;
}