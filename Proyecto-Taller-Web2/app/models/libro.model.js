module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define("libro", {
    id_libro:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    autor: {
      type: Sequelize.STRING
    },
    titulo: {
      type: Sequelize.STRING
    },
    ano: {
      type: Sequelize.INTEGER
    }

  },

  {freezeTableName: true,});

  return Libro;
};
