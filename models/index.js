const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const a = "mysql://root:NDTKrThduvckBeOPYnbmRsqogXZzkGNa@roundhouse.proxy.rlwy.net:19762/railway"
const sequelize = new Sequelize(a);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);

module.exports = db;