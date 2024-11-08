require('dotenv').config();

module.exports = {
  "development": {
    "username": `root`,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": `root`,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
  },
  "production": {
    "username": `root`,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
  }
}