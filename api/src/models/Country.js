const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{

      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,

    },
    nombre: {

      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    },
    imagen: {

      type: DataTypes.STRING,
      isUrl: true,
      allowNull: false

    },
    continente: {

      type: DataTypes.STRING,
      allowNull: false

    },
    capital: {

      type: DataTypes.STRING,
      allowNull: false

    },
    subregion: {
      
      type: DataTypes.STRING,
      allowNull: false

    },
    area: {
      
      type: DataTypes.DOUBLE,
      allowNull: true

    },
    poblacion: {
      
      type: DataTypes.INTEGER,
      allowNull: false

    }

  }, { freezeTableName: true, timestamps: false });
};
