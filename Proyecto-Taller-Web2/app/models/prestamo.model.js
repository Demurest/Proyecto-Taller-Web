module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define("prestamo", {
    id_prestamo:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      fecha: {
        type: Sequelize.TIMESTAMP
      },
      id_libro_libro: {
        type: Sequelize.INTEGER
      },
      id_persona_personas: {
        type: Sequelize.INTEGER
      }
    });

    return prestamo;
  };
