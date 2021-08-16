module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define("prestamo", {
    id_prestamo:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      fecha: {
        type: Sequelize.DATE
      },
      id_libro_libro: {
        type: Sequelize.INTEGER,
        references: {
        model: 'libro',
        key: 'id_libro',
        }
      },
      id_persona_personas: {
        type: Sequelize.INTEGER,
        references: {
        model: 'persona', // se refiere a la tabla persona
        key: 'id_persona',
        }
      },


    },{freezeTableName: true,});
    return Prestamo;
  };
