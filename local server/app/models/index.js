const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.production.DB, dbConfig.production.USER, dbConfig.production.PASSWORD, {
  host: dbConfig.production.HOST,
  dialect: dbConfig.production.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.production.pool.max,
    min: dbConfig.production.pool.min,
    acquire: dbConfig.production.pool.acquire,
    idle: dbConfig.production.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.production_orders = require("./order.model.js")(sequelize, Sequelize);

module.exports = db;