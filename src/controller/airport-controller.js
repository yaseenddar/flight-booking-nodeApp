const { AirportService } = require("../services")

const {ErrorResponse, SuccessResponse} = require('../utils/common')
 async function  createAirport(req,res){
    try {
        
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId

        })
       SuccessResponse.data = airport;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}

async function  getAirports(req,res){
    try {
        // console.log("in controller",req.body)
        const airports = await AirportService.getAirports()
       SuccessResponse.data = airports;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
async function  getAirport(req,res){
    try {
        // console.log("in controller",req.body)
        const airport = await AirportService.getAirport(req.params.id)
       SuccessResponse.data = airport;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
async function  destroyAirport(req,res){
    try {
        // console.log("in controller",req.body)
        const airport  = await AirportService.destroyAirport(req.params.id)
       SuccessResponse.data = airport;
        
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}