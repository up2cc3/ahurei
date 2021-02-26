module.exports = (sequelize, Sequelize) => {
  
  const SalesOrder = sequelize.define("sales_order", {

    entity_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    state: {
      type: Sequelize.STRING
    },
    increment_id: {
      type: Sequelize.STRING
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  });

  return SalesOrder;
};