const {Router} = require('express');
const {postActivitiesHandler, getActivitiesHandler, deleteActHandler} = require('../handlers/activitiesHandler');

const activitiesRoutes = Router();

activitiesRoutes.get('/', getActivitiesHandler);
activitiesRoutes.delete('/:id', deleteActHandler);
activitiesRoutes.post('/', postActivitiesHandler);

module.exports = activitiesRoutes;