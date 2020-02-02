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
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Staff;
}