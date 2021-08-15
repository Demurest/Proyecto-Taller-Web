module.exports = app => {
  const libro = require("../controllers/libro.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", libro.create);
  router.get("/", libro.findAll);
  router.delete("/:id",libro.delete)
  router.put("/:id", libro.update);

 //duda aqui
  app.use("/api/libro", router);
};
