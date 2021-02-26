const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelizeproduction = new Sequelize(dbConfig.production.DB, dbConfig.production.USER, dbConfig.production.PASSWORD, {
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
const sequelizemagento = new Sequelize(dbConfig.magento.DB, dbConfig.magento.USER, dbConfig.magento.PASSWORD, {
  host: dbConfig.production.HOST,
  dialect: dbConfig.production.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.magento.pool.max,
    min: dbConfig.magento.pool.min,
    acquire: dbConfig.magento.pool.acquire,
    idle: dbConfig.magento.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelizeproduction = sequelizeproduction;
db.productionorder = require("./production_order.model.js")(sequelizeproduction, Sequelize);
db.sequelizemagento = sequelizemagento;
db.salesorder = require("./sales_order.model.js")(sequelizemagento, Sequelize);
db.salesorderitem = require("./sales_order_item.model.js")(sequelizemagento, Sequelize);

module.exports = db;