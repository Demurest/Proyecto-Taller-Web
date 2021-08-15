const db = require("../models/Conexion.js");//aqui
const Persona = db.persona;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  // Create a Tutorial
  const persona = {
    nombre: req.body.nombre,
    apellido_paterno: req.body.apellido_paterno,
    apellido_materno : req.body.apellido_materno,
    //personas_pk: req.body.personas_pk
    id_persona: req.body.id_persona
  };

  // Save Tutorial in the database
  Persona.create(persona)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al registrar persona."
      });
    });
};


  exports.findAll = (req, res) => {

    Persona.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving personas."
        });
      });
  };


  exports.update = (req, res) => {
    const id = req.params.id;

    Persona.update(req.body, {
      where: { id_persona: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Persona was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Persona with id=${id}. Maybe Persona was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Persona with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;

    Persona.destroy({
      where: { id_persona: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Persona was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Persona with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Persona with id=" + id
        });
      });
  };
