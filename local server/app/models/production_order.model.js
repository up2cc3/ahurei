module.exports = (sequelize, Sequelize) => {
  const ProductionOrder = sequelize.define("production_order", {
    status: {
      type: Sequelize.ENUM('ON HOLD', 'BACKORDER', 'DELAY SHIPPING', 'CHANGE REQUESTED', 'IN QUERY')
    },
    comments: {
      type: Sequelize.STRING
    },
    designed: {
      type: Sequelize.BOOLEAN
    },
    packaged: {
      type: Sequelize.BOOLEAN
    },
    item_id: {
      type: Sequelize.INTEGER,
    }
  }
  );
  ProductionOrder.associate = function (models) {
    SalesOrderItem.belongsTo(models.SalesOrderItem, { foreignKey: 'item_id', as: 'item_id' })
  };
  return ProductionOrder;
};