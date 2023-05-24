const {getAllActivities, createActivity} = require('../controllers/activitiesController')

const getActivitiesHandler = async(req, res) => {

    try {

        const allActivitiesDb = await getAllActivities();

        res.send(allActivitiesDb);
        
    } catch (error) {

        res.status(400).json({ error: error.message });
        
    }
}

const postActivitiesHandler = async(req, res) => {

    const {
        nombre, 
        dificultad, 
        duracion, 
        temporada, 
        paises} = req.body;

    try {
        
        const response = await createActivity(
            nombre, 
            dificultad, 
            duracion, 
            temporada, 
            paises);

        res.status(200).json(response)

    } catch (error) {

        res.status(404).json({error: error.message})
        
    }

}

module.exports = {getActivitiesHandler, postActivitiesHandler}