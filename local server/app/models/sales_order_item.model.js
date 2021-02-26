module.exports = (sequelize, Sequelize) => {
  const SalesOrderItem = sequelize.define("sales_order_item", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    order_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    product_type: {
      type: Sequelize.STRING
    },
    sku: {
      type: Sequelize.STRING
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  });
  
  return SalesOrderItem;
};