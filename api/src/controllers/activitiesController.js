const {Activity} = require('../db');

const getAllActivities = async() => {

    const activities = await Activity.findAll();

    if(activities.length){

        return activities;

    }else{

        throw new Error("No se encontraron actividades para mostrar");

    }

}

const createActivity = async(nombre, dificultad, duracion, temporada, paises) => {

    const activity = await Activity.create({nombre, dificultad, duracion, temporada})
    
    if (Array.isArray(paises) && paises.length > 0) {

        await activity.addCountries(paises);
    
    }

    return activity;

}

const deleteActivityDb = async(id) => {

    if(id){

        return await Activity.destroy({

            where: {
    
                id: id
    
            }
        })

    }

}

module.exports = {getAllActivities, createActivity, deleteActivityDb};