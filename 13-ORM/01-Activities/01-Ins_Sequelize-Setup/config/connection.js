const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Database location
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
