const {getAllCountriesDb, getCountryDb, getCountriesCodes} = require('../controllers/getCountriesDb')

const getCountriesHandler = async(req, res) => {

    const {name} = req.query;

    const allCountries = await getAllCountriesDb();

    if(name){

        try {

             let responseQuery = await getCountryDb(name);

             res.status(200).send(responseQuery)

        } catch (error) {
    
            res.status(404).json({error: error.message})
            
        }

    }else{

        res.send(allCountries);

    }

}

const getCountryById = async(req, res) =>{

    const {id} = req.params;

    try {

        const findByid = await getAllCountriesDb(id.toUpperCase());

        res.status(200).json(findByid)
        
    } catch (error) {

        res.status(404).json({error: error.message})
        
    }

}

const getCodes = async(req, res) => {

        try{

            const allCountriesCodes = await getCountriesCodes();

            if(allCountriesCodes.length){

                return res.status(200).send(allCountriesCodes)

            }else{

                return res.status(404).json({

                    status: "error",
                    mensaje: "No se encontraron países para mostrar",
        
                });
            }

        }catch(error){


            return res.status(500).json({

                status: "error",
                mensaje: "Error del servidor al obtener los códigos del pais",
    
              });
        }

}

module.exports = {getCountriesHandler, getCountryById, getCodes};