module.exports = (sequelize, DataTypes) => {
    const PunishReason = sequelize.define('server_punish_reason', {
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    PunishReason.associate = (models) => {
        PunishReason.hasMany(models.server_punishment, {
            foreignKey: 'reason_id',
            as: 'punish_reason'
        });
    };

    return PunishReason;
}