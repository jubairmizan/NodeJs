const Sequelize = require('sequelize');

const sequelize = require('../library/database');

const Product = sequelize.define('product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    img_url: Sequelize.STRING,
    desc: Sequelize.STRING
});

module.exports = Product;