
const {ErrorResponse} = require('../utils/common')
function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.error = {explanation:"city name required"}

        return res.status(404).json({ErrorResponse});
    }
    next();
}

module.exports = {
    validateCreateRequest
}