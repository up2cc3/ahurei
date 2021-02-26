const db = require("../models");
//const databases = require("../config/db.config.js");
const Productionorder = db.productionorder;
const Salesorder = db.salesorder;
const Salesorderitem = db.salesorderitem;
const Op = db.Sequelize.Op;
//const magento = databases.magento
exports.create = (req, res) => {
  const order = {
    status: req.body.status,
    comments: req.body.comments,
    designed: req.body.designed ? req.body.designed : false,
    packaged: req.body.packaged ? req.body.packaged : false
  };

  Order.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};


exports.findAll = (req, res) => {
  // const status = req.query.status;
  //  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;


  Productionorder.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.findAllSO = (req, res) => {
  // const status = req.query.status;
  //  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  /*const sequelize = require('../config/db.config.js');

   const qry = `SELECT so.entity_id,so.state,soi.product_type,soi.sku FROM databases.magento.sales_order so
 LEFT JOIN databases.magento.sales_order_item soi ON so.entity_id = soi.order.id`;
   sequelize.query(qry, null, { raw: true }).then(result => {
     console.log(result);
   })
 */
  Salesorder.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.findAllSOI = (req, res) => {
  // const status = req.query.status;
  //  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

  /*const sequelize = require('../config/db.config.js');

   const qry = `SELECT so.entity_id,so.state,soi.product_type,soi.sku FROM databases.magento.sales_order so
 LEFT JOIN databases.magento.sales_order_item soi ON so.entity_id = soi.order.id`;
   sequelize.query(qry, null, { raw: true }).then(result => {
     console.log(result);
   })
 */
  Salesorderitem.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};

exports.query = (req, res) => {
  const { QueryTypes } = require('sequelize');
  const qry = `SELECT so.entity_id,so.state,so.increment_id,soi.product_type,soi.sku FROM sales_order so
 LEFT JOIN sales_order_item soi ON soi.order_id=so.entity_id `;
  db.sequelizemagento.query(qry, { type: QueryTypes.SELECT }).then(result => {
    res.send(result)
  })

};
exports.queryproduction = (req, res) => {
  const { QueryTypes } = require('sequelize');
  const qry = `SELECT so.increment_id,soi.product_type,soi.sku,po.status,po.designed,po.packaged,po.comments FROM ahurei.production_orders po RIGHT JOIN magento.sales_order_item soi ON soi.item_id=po.item_id RIGHT JOIN magento.sales_order so ON so.entity_id=soi.order_id`;
  db.sequelizeproduction.query(qry, { type: QueryTypes.SELECT }).then(result => {
    res.send(result)
  })

};
exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};


exports.findAllPackaged = (req, res) => {

};