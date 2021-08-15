module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", persona.create);
    router.get("/", persona.findAll);
    router.delete("/:id",persona.delete)
    router.put("/:id", persona.update);
  
   //duda aqui
    app.use("/api/persona", router);
  };
  