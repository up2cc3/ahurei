module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", orders.create);
  
    router.get("/", orders.findAll);
    router.get("/SO", orders.findAllSO);
    router.get("/SOI", orders.findAllSOI);
    router.get("/query", orders.query);
    router.get("/queryproduction", orders.queryproduction);

    router.get("/published", orders.findAllPackaged);
  
    router.get("/:id", orders.findOne);

    router.put("/:id", orders.update);

    router.delete("/:id", orders.delete);
  
    app.use('/api/orders', router);
  };