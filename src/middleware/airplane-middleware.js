
const {ErrorResponse} = require('../utils/common')
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.error = {explanation:"Model Number not found in the oncoming request"}

        return res.status(404).json({ErrorResponse});
    }
    next();
}

module.exports = {
    validateCreateRequest
}