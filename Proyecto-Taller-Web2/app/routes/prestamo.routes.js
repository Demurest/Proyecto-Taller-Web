module.exports = app => {
    const prestamo = require("../controllers/prestamo.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", prestamo.create);
    router.put("/:id", prestamo.update);
    router.get("/", prestamo.findAll);

   //duda aqui
    app.use("/api/prestamo", router);
  };
