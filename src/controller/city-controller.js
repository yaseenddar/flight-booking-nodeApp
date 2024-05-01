const { CityService } = require("../services")

const {ErrorResponse, SuccessResponse} = require('../utils/common')
 async function  createCity(req,res){
    try {
        // console.log("in controller",req.body.name)
        const city = await CityService.createCity({name:req.body.name})
       SuccessResponse.data = city;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}

module.exports ={
    createCity
}