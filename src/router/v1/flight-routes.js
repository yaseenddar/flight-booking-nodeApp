const router = require('express').Router();
const {FlightController} = require('../../controller');
const {FlightMiddleware} = require('../../middleware')


//flight routes for CRUD
router.post('/',FlightMiddleware.validateCreateRequest,FlightController.createFlight)

//get the flight details from to to flight
router.get('/',FlightController.getAllFlights)


//get the flight details from  of particular flight
router.get('/:id',FlightController.getFlight)


// route for incre or decre the seats in flight
router.patch('/:id/seats',FlightController.updateTheSeats);
module.exports = router;