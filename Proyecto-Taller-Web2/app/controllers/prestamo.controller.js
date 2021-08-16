const db = require("../models/Conexion.js");//aqui
const Prestamo = db.Prestamo;
const Libro = db.libro;
const Persona = db.persona;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  // Create a Tutorial
  const prestamo = {
    fecha: req.body.fecha,
    id_libro_libro: req.body.id_libro_libro,
    id_persona_personas : req.body.id_persona_personas,
    //prestamo_pk: req.body.prestamo_pk
    //libro_fk: req.body.libro_fk
    //personas_fk: req.body.personas_fk
    id_prestamo: req.body.id_prestamo
  };

  // Save Tutorial in the database
  Prestamo.create(prestamo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al registra prestamo."
      });
    });
};

exports.findAll = (req, res) => {

  Prestamo.findAll()
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

    Prestamo.update(req.body, {
      where: { id_prestamo: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "prestamo was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update prestamo with id=${id}. Maybe Persona was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
