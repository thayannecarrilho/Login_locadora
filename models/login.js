const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const login = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Seq.STRING,
        allowNull: false
    },
    email: {
        type: Seq.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pass: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
  })
  module.exports = login


  