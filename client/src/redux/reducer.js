import {GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, GET_COUNTRIES_CODES, GET_ACTIVITIES, FILTER_ACTIVITY,GET_PAGE, SORT, FILTER_CONTINENT} from "./actions-types"

const initialState = {

    countries: {

        data: [], 
        countryDetail: [],
        codes: [],
        filterData: [],
		filterContinent: "default",
        filterActivity: "default",
		activeSort: "default",
        pagination: { 
            max: [], 
            currentPage: 1,
            pageLength: 10 
        }

    },
    searchResults: {

        data: []

    },
    activities: {

        data: []

    }
    
}

function paginador(countries, pageLength) {
    //Se recibe en x countries y en y la longitud que queremos mostrar
    const max = Math.ceil(countries.length / pageLength);

    const paginas = [];

    for (let i = 1; i <= max; i++) {

      paginas.push(i);

    }

    return paginas;

}

function configSorts(arr, payload, original) {

	let ordenamiento;
	
	if (payload === "a-z") {
	
		ordenamiento = arr.sort(function (x, y) {

			return x.nombre.localeCompare(y.nombre);
	
		});
	
	} else if (payload === "z-a") {
	
		ordenamiento = arr.sort((x, y) => y.nombre.localeCompare(x.nombre));
	
	} else if (payload === "menor-mayor") {

		ordenamiento = arr.sort((x, y) => x.poblacion - y.poblacion);
	
	} else if (payload === "mayor-menor") {
		
		ordenamiento = arr.sort((x, y) => y.poblacion - x.poblacion);
	
	} else {

		ordenamiento = original;

	}
	
	return ordenamiento;

}

function allFilters(array, continente, activity, state, sort) {
	
	let finalRes = sort !== "default" ? array : state.countries.data;

	const countriesFilter = finalRes.filter((country) => {
		
		const filterByContinente = continente !== "default" ? country.continente.includes(continente) : true;

        const filterActivity = activity !== "default" ?
            
            country.activities.some((act) => act.nombre.includes(activity))
        
        : true;

		return filterByContinente && filterActivity;
	
	});

	const respuesta = configSorts( countriesFilter, sort ? sort : state.countries.activeSort, countriesFilter );

    return respuesta;

}	

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_COUNTRIES:

        const defaultFilters = allFilters(
            action.payload, 
            state.countries.filterContinent,
            state.countries.filterActivity, 
            state)

        const paginas = paginador(defaultFilters, state.countries.pagination.pageLength)

        return{

            ...state, 

            countries: {

                ...state.countries,

                data: action.payload, 

                filterData: defaultFilters,

                pagination: {

                    ...state.countries.pagination, 
                    max: paginas
                }

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

        case GET_ACTIVITIES: 

        return{

            ...state, 
            activities:{

                ...state.activities,
                data: action.payload
                
            }

        }

        case GET_PAGE:

        return{

            ...state, 

            countries: {

                ...state.countries, 

                pagination: {

                    ...state.countries.pagination, 

                    currentPage: action.payload

                }
            }

            
        }

        case SORT:

            const filterSort = allFilters(

                state.countries.filterData,

                state.countries.filterContinent,

                state.countries.filterActivity,

                state,

                action.payload

            )

            const pagesSort = paginador(filterSort, state.countries.pagination.pageLength)

        return{

            ...state,

            countries: {

                ...state.countries,

                filterData: [...filterSort],

                activeSort: action.payload, 

                pagination: {

                    ...state.countries.pagination, 

                    max: pagesSort
                }

            }


        }

        case FILTER_ACTIVITY:

            const filterActivity = allFilters (

                state.countries.data,
                state.countries.filterContinent,
                action.payload,
                state

            )
            
            const pagesActivity = paginador(filterActivity, state.countries.pagination.pageLength)

        return{

           ...state, 

           countries: {

            ...state.countries,

            filterData: filterActivity,

            pagination:{

                ...state.countries.pagination,

                max: pagesActivity,

                currentPage: 1

            },

            filterActivity: action.payload,

           }

        }

        case FILTER_CONTINENT:

            const filterContinent = allFilters (

                state.countries.data,
                action.payload,
                state.countries.filterActivity,
                state

            )
            
            const pagesContinent = paginador(filterContinent, state.countries.pagination.pageLength)

        return{

           ...state, 

           countries: {

            ...state.countries,

            filterData: filterContinent,

            pagination:{

                ...state.countries.pagination,

                max: pagesContinent,

                currentPage: 1

            },

            filterContinent: action.payload,

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