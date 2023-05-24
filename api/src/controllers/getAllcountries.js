const axios = require('axios')

const getAllCountriesApi = async() => {

    const infoApi = await axios.get(`https://rest-countries.up.railway.app/v2/all`);

    const newData = infoApi.data.map((countrie) => {

        return{

            id: countrie.alpha3Code,
            nombre: countrie.name,
            imagen: countrie.flag,
            continente: countrie.region,
            area: countrie.area ? countrie.area : 0,
            capital: countrie.capital ? countrie.capital : 'No Capital',
            subregion: countrie.subregion,
            poblacion: countrie.population

        }

    })

    return newData;
}

module.exports = getAllCountriesApi;