const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'root',
  'myPassword',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
