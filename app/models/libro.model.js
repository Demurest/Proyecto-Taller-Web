module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define("libro", {
    id_libro:{
      type: Sequelize.INTEGER,
      primaryKey:true 
    },
    autor: {
      type: Sequelize.STRING
    },
    titulo: {
      type: Sequelize.STRING
    },
    ano: {
      type: Sequelize.INTEGER
    },
    /*libro_pk: {
      type: Sequelize.CONSTRAINT
    }*/
  });

  return Libro;
};
