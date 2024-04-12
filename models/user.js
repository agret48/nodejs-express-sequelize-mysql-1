module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      comments: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };