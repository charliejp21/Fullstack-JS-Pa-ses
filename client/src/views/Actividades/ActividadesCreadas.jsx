import { useEffect, useState } from 'react';
import style from './ActividadesCreadas.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {getActivities, deleteActivity} from "../../redux/action"
import wait from '../../images/loading-12.gif'

const AvtivitiesContainer = () => {

    const dispatch = useDispatch();

    const[loading, setLoading] = useState(true);

    useEffect(() => {

        dispatch(getActivities())

        .then(() => setLoading(false))

        .catch((error) => {

            setLoading(false);

            console.error('Error al obtener las actividades:', error);

        })

    }, [])

function handlerDelete (id){
        
        try {

            deleteActivity(id)

            alert("Actividad borrada exiosamente")

            window.location.reload(); 

            
        } catch (error) {
            
            alert("Error al borrar la actividad")

        }

    }

    const activities = useSelector(state => state.activities.data)

    return(<div>
        {loading ? (<h1 className={style.h1Cargando}>Buscando...<br/><img src={wait} alt='waiting' height="130px" /></h1>)
        
        : activities.length > 0 ?(

            <div className={style.divResultsContainer}> 
                <h2 className={style.titulo}>Actividades creadas</h2>
                <div className={style.activityContainers}> 

                    {activities.map((activity) => (

                        <div className={style.activitiesContainers}>
                            <button className={style.btn19} onClick={() => {handlerDelete(activity.id)}}>
                                <span className={style.textContainer}>
                                    <span className={style.text}>Borrar</span>
                                </span>
                            </button>
                            <h1 key={activity.id}>Nombre: </h1><br/>
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