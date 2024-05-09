const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

//const connect_string = process.env.CONNECT_STRING

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectOptions:{
    ssl:{
      require:true,
      rejecUnauthorized: false
    }
  },
});

  sequelize.authenticate().then(()=> {
    console.log('Connection has been established successfully.');
  }).catch((err) =>{
    console.error('Unable to connect to the database:', err);
  })

  sequelize.sync(() => {
    console.log('Base de datos sincronizada correctamente')
  }).catch((err)=> {
    console.log('Error de sinconizacion de la db', err)
  })

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Conectar los modelos
db.customer = require('./models/customer') (sequelize, DataTypes)

module.exports = db;