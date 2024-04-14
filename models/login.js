const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const login = db.define('users', {
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },    
    email: {
        type: DataTypes.TEXT,
        allowNull: false
      },    
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = login


  