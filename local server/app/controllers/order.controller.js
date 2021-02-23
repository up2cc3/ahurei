const db = require("../models");
const databases = require("../config/db.config.js");
const Order = db.production_orders;
const Op = db.Sequelize.Op;
const magento = databases.magento
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
  const status = req.query.status;
  var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;
/*
const sequelize = require('db_config');
function test(req, res){
  const qry = `SELECT * FROM db1.affiliates_order co
LEFT JOIN db2.affiliates m ON m.id = co.campaign_id`;
  sequelize.query(qry, null, {  raw: true}).then(result=>{
    console.log(result);
  })
}
*/

  Order.findAll({ where: condition })
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

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};


exports.findAllPackaged = (req, res) => {

};