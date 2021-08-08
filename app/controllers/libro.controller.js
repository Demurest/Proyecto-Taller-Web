const db = require("../models/Conexion.js");//aqui
const Libro = db.libro;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  // Create a Tutorial
  const libro = {
    autor: req.body.autor,
    titulo: req.body.titulo,
    ano : req.body.ano,
    //libro_pk: req.body.libro_pk
  };

  // Save Tutorial in the database
  Libro.create(libro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al registra libro."
      });
    });
};


  exports.findAll = (req, res) => {

    Libro.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving libros."
        });
      });
  };


  exports.update = (req, res) => {
    const id = req.params.id;

    Libro.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Libro was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Libro with id=${id}. Maybe Persona was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;

    Libro.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Libro was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Libro with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Usuario with id=" + id
        });
      });
  };
