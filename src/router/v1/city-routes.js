const router = require('express').Router();
const {CityController} = require('../../controller');
const {CityMiddlewares} = require('../../middleware')


//airplane routes for CRUD
router.post('/',CityMiddlewares.validateCreateRequest,CityController.createCity)
// router.get('/',CityMiddlewares.getAirplanes)
// router.get('/:id',CityMiddlewares.getAirplane)
// router.delete('/:id',CityMiddlewares.destroyAirplane);

//city routes for CRUD

module.exports = router;