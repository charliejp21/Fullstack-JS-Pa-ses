import { useEffect,useState } from 'react';
import style from './Search.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import Countrie from "../../components/Countrie/Countrie";
import {getCountriesByName} from '../../redux/action'
import wait from '../../images/loading-12.gif'

const ResultsCotainer = () => {

    const {nombre} = useParams();

    const dispatch = useDispatch(nombre);

    const countries = useSelector(state => state.searchResults.data)

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        dispatch(getCountriesByName(nombre))

        .then(() => setLoading(false)) 

        .catch((error) => {

            setLoading(false);

            console.error('Error al obtener los países:', error);

          });

    }, [dispatch, nombre]);

    return(

        <div>
            {loading ?  (<h1 className={style.h1Search}>Buscando...<br/><img src={wait} alt="waiting" height= '130px'/></h1>)
            
            :  countries.length > 0 ? (<>
            
                <h2 className={style.titulo}>Se muestran los siguientes resultados:</h2>
                
                    <div className={style.divResultsContainer}> 
                    
                    <div className={style.recipeContainers}> 
    
                        {countries.map(countrie => {
    
                            return <Countrie

                                key={countrie.id}
                                id={countrie.id}
                                nombre={countrie.nombre}
                                continente={countrie.continente}
                                capital={countrie.capital}
                                imagen={countrie.imagen}
                                subregion={countrie.subregion}
                                area={countrie.area}
                                poblacion={countrie.poblacion}
    
                            />
    
                        })}
                        
                    </div>
                    
                    </div>

                </>) 
                
            : (

                <h1 className={style.h1Search}>Prueba buscando de otra manera</h1>
                  
              )}

        </div>

    )

}

export default ResultsCotainer;