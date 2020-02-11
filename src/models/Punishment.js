module.exports = (sequelize, DataTypes) => {
    const Punishment = sequelize.define('server_punishment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        staffer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reason_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        revoke_user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        revoke_reason_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hidden: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        perpetual: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        proof: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        start_time: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        end_time: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        revoke_time: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    });

    Punishment.associate = (models) => {
        Punishment.belongsTo(models.server_user, {
            foreignKey: 'user_id',
            as: 'user'
        });
        Punishment.belongsTo(models.server_user, {
            foreignKey: 'staffer_id',
            as: 'staffer'
        });
        Punishment.belongsTo(models.server_user, {
            foreignKey: 'revoke_user_id',
            as: 'revoker'
        });
        Punishment.belongsTo(models.server_punish_reason, {
            foreignKey: 'reason_id',
            as: 'punish_reason'
        });
        Punishment.belongsTo(models.server_revoke_reason, {
            foreignKey: 'revoke_reason_id',
            as: 'revoke_reason'
        });
    };

    return Punishment;
}