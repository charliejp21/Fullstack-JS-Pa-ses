const {Country} = require('../db');
const getAllCountriesApi = require("./getAllcountries")

const postCountries = async() => {

    const findData = await Country.findAll()

    if(findData.length){

        return;

    }else{

        const countriesApi = await getAllCountriesApi();

        let allCountriesApi = countriesApi.map((element) => {

            Country.create(element)

        })

        Promise.all(allCountriesApi).then((element) => console.log("Paises cargados"))
 
    }

}

module.exports = {postCountries};