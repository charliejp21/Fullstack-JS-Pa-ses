import Countrie from '../../components/Countrie/Countrie' 
import style from './Countries.module.css'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import wait from '../../images/loading-12.gif'
import {getAllCountries, filterActivity, filterContinent, sort, getPage} from "../../redux/action"

const CountriesContainer = () =>  {

    const dispatch = useDispatch();

    const [pageView, setPageView] = useState([]);

    const currentFilContinent = useSelector(state => state.countries.filterContinent)

    const currentFilActivity = useSelector(state => state.countries.filterActivity)

    const sortGlobalState = useSelector(state => state.countries.activeSort)

    const countries = useSelector(state => state.countries.data)

    const pagination = useSelector(state => state.countries.pagination)

    const filterData = useSelector(state => state.countries.filterData)

    const uniqueContinents = countries.filter((element, index, countries) => index === countries.findIndex((country) => country.continente === element.continente)) 

    const uniqueActivities = countries
        .flatMap(country => country.activities) // Obtener todas las actividades en un solo array
        .filter((activity, index, self) => index === self.findIndex(a => a.nombre === activity.nombre)) // Filtrar las actividades sin duplicados por nombre
        .map(activity => activity.nombre); // Obtener solo los nombres de las actividades

    useEffect(() => {

        dispatch(getAllCountries())

    }, [dispatch])

    useEffect(() => {

        let min;

        let max;

        if(pagination.max.length === 1){

            setPageView(filterData)
            
        }else{

            max = pagination.currentPage * pagination.pageLength;

            min  = max - pagination.length;

            setPageView(filterData.slice(min, max))

        }

    }, [filterData])

    useEffect(() => {

        let min;

        let max;

        if(pagination.max.length === 1){

            setPageView(filterData)

        }else{

            max = pagination.currentPage * pagination.pageLength;

            min = max - pagination.pageLength;

            setPageView(filterData.slice(min, max))

        }

    }, [pagination.currentPage])

    function handlerFilterActivity(activity){

        dispatch(filterActivity(activity))

    }

    function handlerFilterContinent(continente){

        dispatch(filterContinent(continente))
    }

    function handlerOrder(orderSelected){

        dispatch(sort(orderSelected))

    }

    function changeHandlerPage(page){

        dispatch(getPage(page))

    }

    return (

        <>
            <h1 className={style.bienvenido}>Bienvenido</h1> 

            <h2 className={style.subtitle}>Busca, filtra, ordena o crea una nueva actividad</h2>

            <div className={style.countriesSection}>

                <div className={style.overlay}></div>

                <div className={style.headerContainer}>

                    <div className={style.selectsContainer}>

                        <div>
                            
                            <p>Ordenar por:</p>

                            <div className={style.sortContainer}>

                                <select name="" id="" onChange={(event) => {handlerOrder(event.target.value)}}>

                                    <option value="default" selected={sortGlobalState === "default"}>

                                        Default

                                    </option>

                                    <option value="a-z" selected={sortGlobalState === "a-z"}>

                                        A-z

                                    </option>

                                    <option value="z-a" selected={sortGlobalState === "z-a"}>

                                        Z-a

                                    </option>

                                    <option value="menor-mayor" selected={sortGlobalState === "menor-mayor"} >
                                        
                                        Población de menor a mayor

                                    </option>

                                    <option value="mayor-menor" selected={sortGlobalState === "mayor-menor"} >

                                        Población de mayor a menor

                                    </option>

                                </select>

                            </div>

                        </div>

                        <div>
                        
                            <p>Filtrar por continentes:</p>

                            <div className={style.selectContainer}>
                                
                                <select name="" id="" onChange={(event) => { handlerFilterContinent(event.target.value)}}>

                                    <option selected={currentFilContinent === "default"} value={"default"} >
                                        
                                        Default
                                    
                                    </option>

                                    {uniqueContinents.map((country) => ( 
                                        
                                        <option selected={currentFilContinent === country.continente} value={country.continente} key={country.id} >

                                            {country.continente}

                                        </option>
                                    
                                    ))}

                                </select>

                            </div>

                        </div>

                        

                        <div>
                        
                            <p>Filtrar por actividades:</p>

                            <div className={style.selectContainer}>
                                
                                <select name="" id="" onChange={(event) => { handlerFilterActivity(event.target.value)}}>

                                    <option selected={currentFilActivity === "default"} value={"default"} >
                                        
                                        Default
                                    
                                    </option>

                                    {uniqueActivities.map((activity) => ( 
                                        
                                        <option selected={currentFilActivity === activity} value={activity} key={activity} >

                                            {activity}

                                        </option>
                                    
                                    ))}

                                </select>

                            </div>

                        </div>

                    </div>

                    <div className={style.pageBtnContainer}>

                        {pagination.max.map((page) => (
                        
                            <button key={page} onClick={() => {changeHandlerPage(page)}} 
                            
                                className={page === pagination.currentPage ? `${style.btn} ${style.btnPage}` : `${style.btn}`
                                
                                }>
                                    
                                {page}
                            
                            </button>

                        ))}

                    </div>

                </div>

                <div className={style.countriesContainer}>
                    
                    {pageView.length ? 
                    
                        (pageView.map((countrie) => (
                            
                            <Countrie

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
                        
                        ))

                    ) : (

                        <h2 className={style.subtitleImg}><img src={wait} alt="waiting" height= '130px'/></h2>
                        
                    
                    )}

                </div>

            </div>
        
        
        </>

    )

}

export default CountriesContainer;