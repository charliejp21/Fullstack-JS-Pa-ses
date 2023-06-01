import {GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, GET_COUNTRIES_CODES} from "./actions-types"

const initialState = {

    countries: {

        data: [], 
        countryDetail: [],
        codes: [],

    },
    
    searchResults: {

        data: []

    },
    
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_COUNTRIES:

        return{

            ...state, 

            countries: {

                ...state.countries,

                data: action.payload


            }

        }

        case GET_COUNTRY_BY_NAME:

        return{

            ...state, 

            searchResults:{

                ...state.searchResults,

                data: action.payload
                
            }

        }

        case GET_COUNTRY_BY_ID:

        return{

            ...state, 

            countries: {

                ...state.countries,
                
                countryDetail: action.payload

            }

        }

        case GET_COUNTRIES_CODES:

        return{

            ...state,

            countries: {

                ...state.countries,
                codes: action.payload

            }
        }

        default: {

            return{

                ...state

            }
        }

    }

}

export default rootReducer;