const router = require('express').Router();
const {AirplaneController} = require('../../controller');
const {AirplaneMiddlewares} = require('../../middleware')


//airplane routes for CRUD
router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane)
router.get('/',AirplaneController.getAirplanes)
router.get('/:id',AirplaneController.getAirplane)
router.delete('/:id',AirplaneController.destroyAirplane);

//city routes for CRUD

module.exports = router;