const {Router} = require('express');
const {getCountriesHandler, getCountryById} = require('../handlers/countriesHandler')

const countriesRoutes = Router();

countriesRoutes.get("/", getCountriesHandler)
countriesRoutes.get("/:id", getCountryById)

module.exports = countriesRoutes;