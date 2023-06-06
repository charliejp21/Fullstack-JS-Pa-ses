const {getAllActivities, createActivity, deleteActivityDb} = require('../controllers/activitiesController')

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

const deleteActHandler = async(req, res) => {

    const {id} = req.params;

    try {

        const borrar = await deleteActivityDb(id);

        if(borrar){

            return res.status(200).send({

                status: "success",
                actividad: borrar,
                mensaje: "Actividad borrada exitosamente" 

            })
        }
        
    } catch (error) {

        return res.status(404).send({

            status: "error",
            mensaje: "No se encontró la actividad con el id proporcionado"

        })
        
    }

    return res.status(500).json({

        status: "error",
        mensaje: "Error del servidor al buscar"

    })

}

module.exports = {getActivitiesHandler, postActivitiesHandler, deleteActHandler}