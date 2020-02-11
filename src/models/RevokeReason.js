module.exports = (sequelize, DataTypes) => {
    const RevokeReason = sequelize.define('server_revoke_reason', {
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
        }
    });

    RevokeReason.associate = (models) => {
        RevokeReason.hasMany(models.server_punishment, {
            foreignKey: 'revoke_reason_id',
            as: 'revoke_reason'
        });
    };

    return RevokeReason;
}