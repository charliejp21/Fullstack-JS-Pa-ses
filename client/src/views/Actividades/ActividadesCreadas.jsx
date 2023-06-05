import { useEffect } from 'react';
import style from './ActividadesCreadas.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {getActivities} from "../../redux/action"

const AvtivitiesContainer = () => {

    const dispacth = useDispatch();

    useEffect(() => {

        dispacth(getActivities())

    }, [])

    const activities = useSelector(state => state.activities.data)

    return(<div>
    
        {activities.length ? (
            <div className={style.divResultsContainer}> 
                <h2 className={style.titulo}>Actividades creadas</h2>
                <div className={style.activityContainers}> 

                    {activities.map(activity => (

                        <div className={style.activitiesContainers}>
                            <button className={style.buttonActivity}>X</button>
                            <h1>Nombre: </h1><br/>
                            <h4>{activity.nombre}</h4>
                            <h2>Dificultad: </h2>
                            <h4>{activity.dificultad}</h4>
                            <h3>Duracion: </h3>
                            <h4>{activity.duracion}</h4>
                            <h3>Temporada ideal: </h3>
                            <h4>{activity.temporada}</h4>

                        </div>
                    ))}

                </div>
            </div>

        ):(
 
            <h1 className={style.h1Search}>Sin actividades creadas para mostrar</h1>
 

        )}
    
    </div>)

}

export default AvtivitiesContainer;