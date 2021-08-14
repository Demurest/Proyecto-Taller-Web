module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("persona", {
        id_persona:{
        type: Sequelize.INTEGER,
        primaryKey:true 
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido_paterno: {
        type: Sequelize.STRING
      },
      apellido_materno: {
        type: Sequelize.STRING
      },
      /*id_persona: {
        type: Sequelize.CONSTRAINT
      }*/
    });
  
    return Persona;
  };
  