import { useDispatch, useSelector } from "react-redux";
import style from './Countrie.module.css'
import {useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCountryById } from "../../redux/action";

const CountrieView = () => {

    const {id} = useParams();

    const dispatch = useDispatch(id);

    useEffect(() => {

        dispatch(getCountryById(id))

    }, [])

    const country = useSelector(state  => state.countries.countryDetail)

    const miles = (amount) =>{

        const newAmount = amount.toString().split('').reverse();

        let newArray = []

        let count = 0;

        for (let i = 0; i < newAmount.length; i++) {


            if(count === 3){

                newArray.push(",");

                count = 0

            }

            newArray.push(newAmount[i])

            count++;
            
        }

        return newArray.reverse().join('');

    }

    return (


        <div className={style.detailCountry}>

            <img src={country.imagen && country.imagen} alt="country"></img>

            <h1>{country.nombre && country.nombre}({country.id && country.id})</h1><br/>

            <table className={style.tableInfo}>
                <tr>
                    <th>Alpha3Code</th>
                    <th>Continente</th>
                    <th>Capital</th>
                    <th>Subregión</th>
                    <th>Área territorial</th>
                    <th>Población</th>
                </tr>
                
                <tr>
                    <td>{country.continente && country.id}</td>
                    <td>{country.continente && country.continente}</td>
                    <td>{country.capital && country.capital}</td>
                    <td>{country.subregion && country.subregion}</td>
                    <td>{country.area && miles(country.area)} km2</td>
                    <td>{country.poblacion && miles(country.poblacion)} habitantes</td>
                </tr>


            </table>

            {country.activities && country.activities.length ? 
            
                (<>
                    <h2>Actividades para realizar</h2><br/>
                    <div className={style.divActv}>

                        {country.activities && country.activities.map(activity => {
                        
                            return(<div className={style.caja}>
                            
                                    <h3 key={activity.id}>{activity.nombre}</h3><br/>

                                    <h4>Nivel de dficultad: </h4>
                                    <p>Nivel {activity.dificultad}</p>

                                    <h4>Duracion: </h4>
                                    <p>{activity.duracion} horas</p>

                                    <h4>Ideal para realizar en </h4>
                                    <p>{activity.temporada}</p>
        
                                </div>);

                        })}

                    </div>
                </>)
            
            :
            
                (<h2>Sin actividades registradas para este país</h2>)
                
            }

        </div>

    )

}

export default CountrieView;