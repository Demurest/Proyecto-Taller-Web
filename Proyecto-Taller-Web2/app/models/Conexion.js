const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.libro = require("./libro.model.js")(sequelize, Sequelize);
db.persona = require("./persona.model.js")(sequelize, Sequelize);
db.Prestamo = require("./prestamo.model.js")(sequelize, Sequelize);


const Libro = db.libro;
const Persona = db.persona;

const prestamo = db.Prestamo;

prestamo.belongsTo(Persona,{foreignkey: 'id_persona_personas'});
prestamo.belongsTo(Libro,{foreignkey: 'id_libro_libro'});
module.exports = db;
