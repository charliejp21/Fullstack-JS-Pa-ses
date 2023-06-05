import axios from "axios";
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, GET_COUNTRIES_CODES, GET_ACTIVITIES, SORT, GET_PAGE, FILTER_ACTIVITY, FILTER_CONTINENT } from "./actions-types";

export const getAllCountries = () => async(dispatch) => {

    const apiDataDb = await axios.get("http://localhost:3001/countries");

    const countries = apiDataDb.data;

    dispatch({

        type: GET_ALL_COUNTRIES,
        payload: countries

    });

}

export const getCountriesByName = (nombre) => async(dispatch) =>{

    const apiDataDb = await axios.get(`http://localhost:3001/countries?name=${nombre}`)

    const countries = apiDataDb.data;

    dispatch({

        type: GET_COUNTRY_BY_NAME,
        payload: countries
    })


}

export const getCountryById = (id) => async(dispatch) => {

    const apiDataDb = await axios.get(`http://localhost:3001/countries/id/${id}`)

    const country = apiDataDb.data;

    dispatch({

        type: GET_COUNTRY_BY_ID,
        payload:  country

    })

}

export const getCodesCountries = () => async(dispatch) =>{

    const apiDataDb = await axios.get("http://localhost:3001/countries/codes/alpha3code")

    const codes = apiDataDb.data;

    dispatch({

        type: GET_COUNTRIES_CODES,
        payload: codes

    });

}

export const getActivities = () => async(dispatch) => {

    const apiDataDb = await axios.get("http://localhost:3001/activities")
    
    const activities = apiDataDb.data; 

    dispatch({

        type: GET_ACTIVITIES,
        payload: activities

    })

}

export const postActivity = async(info) => {

    console.log(info)

    const postDataDb = await axios.post(`http://localhost:3001/activities`, info)

    return postDataDb.data;

}

export const getPage = (pages) => async(dispatch) => {

    dispatch({

        type: GET_PAGE,
        payload: pages,

    })

}

export const sort = (order) => async(dispatch) => {

    dispatch({

        type: SORT,
        payload: order,

    })

}

export const filterActivity = (activity) => async(dispatch) => {

    dispatch({

        type: FILTER_ACTIVITY,
        payload: activity
        
    })

}

export const filterContinent = (continente) => async(dispatch) =>{

    dispatch({

        type: FILTER_CONTINENT,
        payload: continente

    })
    

} 