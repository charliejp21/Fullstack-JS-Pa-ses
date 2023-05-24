const {Router} = require('express');
const {postActivitiesHandler, getActivitiesHandler} = require('../handlers/activitiesHandler');

const activitiesRoutes = Router();

activitiesRoutes.get('/', getActivitiesHandler);
activitiesRoutes.post('/', postActivitiesHandler);

module.exports = activitiesRoutes;