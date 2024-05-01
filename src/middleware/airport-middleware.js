
const {ErrorResponse} = require('../utils/common')
function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.error = {explanation:"name not found in the oncoming request in the coorect form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.cityId){
        ErrorResponse.error = {explanation:"cityId not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.code){
        ErrorResponse.error = {explanation:"CityID not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    next();
}

module.exports = {
    validateCreateRequest
}