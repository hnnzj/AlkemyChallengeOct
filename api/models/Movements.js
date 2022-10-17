const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { sequelize } = require('../db.js');

const Movements = sequelize.define(
    'movements',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: true,
            primaryKey: true,
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = {
    Movements,
};
