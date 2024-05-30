const router = require('express').Router();
const {FlightController} = require('../../controller');
const {FlightMiddleware} = require('../../middleware')


//flight routes for CRUD
router.post('/',FlightMiddleware.validateCreateRequest,FlightController.createFlight)

//get the flight details from to to flight
router.get('/',FlightController.getAllFlights)


module.exports = router;