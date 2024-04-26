const { AirplaneService } = require("../services")

const {ErrorResponse, SuccessResponse} = require('../utils/common')
 async function  createAirplane(req,res){
    try {
        // console.log("in controller",req.body)
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity: req.body.capacity
        })
       SuccessResponse.data = airplane;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}

async function  getAirplanes(req,res){
    try {
        // console.log("in controller",req.body)
        const airplanes = await AirplaneService.getAirplanes()
       SuccessResponse.data = airplanes;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
async function  getAirplane(req,res){
    try {
        // console.log("in controller",req.body)
        const airplanes = await AirplaneService.getAirplane(req.params.id)
       SuccessResponse.data = airplanes;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
async function  destroyAirplane(req,res){
    try {
        // console.log("in controller",req.body)
        const airplanes = await AirplaneService.destroyAirplane(req.params.id)
       SuccessResponse.data = airplanes;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}