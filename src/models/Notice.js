module.exports = (sequelize, DataTypes) => {
    const Notice = sequelize.define('website_notices', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    return Notice;
}