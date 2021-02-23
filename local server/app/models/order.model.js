module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("production_order", {
      status: {
        type: Sequelize.ENUM('ON HOLD', 'BACKORDER','DELAY SHIPPING','CHANGE REQUESTED','IN QUERY')
      },
      comments: {
        type: Sequelize.STRING
      },
      designed: {
        type: Sequelize.BOOLEAN
      },
      packaged: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Order;
  };