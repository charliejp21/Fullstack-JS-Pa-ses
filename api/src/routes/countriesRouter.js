const {Router} = require('express');
const {getCountriesHandler, getCountryById, getCodes} = require('../handlers/countriesHandler')

const countriesRoutes = Router();

countriesRoutes.get("/", getCountriesHandler)
countriesRoutes.get("/id/:id", getCountryById)
countriesRoutes.get("/codes/alpha3code", getCodes)

module.exports = countriesRoutes;