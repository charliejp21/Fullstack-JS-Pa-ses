const {Country, Activity} = require('../db');
const { Op } = require('sequelize');

const getCountryDb = async(name) => {

  console.log(name)

  if(name){

    const dataName = await Country.findAll({ 
      
      where: {

        nombre: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: {

          model: Activity,
          as: 'activities'

      }

    })

    if(dataName.length){

      return dataName;

    }else{

      throw new Error("No se encontró el país solicitado");

    }

  }

}

const getAllCountriesDb = async(id) => {

    if(id){

        const dataId = await Country.findByPk(id, {
            include: {
              model: Activity,
              as: 'activities'
            }
          })

        if (dataId) {

            return dataId;

        }else{

          throw new Error("No se encontró el país solicitado");

        }

    }else{

        const allCountries = await Country.findAll({

            include: {

              model: Activity,
              attributes: ["id", "nombre", "dificultad", "duracion", "temporada"]

            }

          })

      return allCountries;

    }
}

module.exports = {getAllCountriesDb, getCountryDb};