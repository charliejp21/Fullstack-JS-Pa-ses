const {getAllCountriesDb, getCountryDb} = require('../controllers/getCountriesDb')

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

module.exports = {getCountriesHandler, getCountryById};