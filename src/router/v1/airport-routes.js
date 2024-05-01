const router = require('express').Router();
const {AirportController} = require('../../controller');
const {AirportMiddlewares} = require('../../middleware')


//airplane routes for CRUD
router.post('/',AirportMiddlewares.validateCreateRequest,AirportController.createAirport)
router.get('/',AirportController.getAirports) 
router.get('/:id',AirportController.getAirport)
router.delete('/:id',AirportController.destroyAirport);

//city routes for CRUD

module.exports = router;