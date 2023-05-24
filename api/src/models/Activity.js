const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
      id:{
  
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
  
        type: DataTypes.STRING,
        allowNull: false,
  
      },
      dificultad: {
  
        type: DataTypes.INTEGER,
        validate:{
          max: 5,              
          min: 1
        },
        allowNull: false
  
      },
      duracion: {
  
        type: DataTypes.INTEGER,
        validate:{
            max: 8,                 
            min: 1
        },
        allowNull: false

      },
      temporada: {

        type: DataTypes.STRING,
        allowNull: false,

      }
    }, { freezeTableName: true, timestamps: false });
  };