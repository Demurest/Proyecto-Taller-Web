module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define("libro", {
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
