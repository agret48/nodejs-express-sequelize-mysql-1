module.exports = (sequelize, Sequelize) => {
    const Authentification = sequelize.define("authentification", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Authentification;
};