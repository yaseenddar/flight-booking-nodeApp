
const {ErrorResponse} = require('../utils/common')
function validateCreateRequest(req,res,next){

    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"flightNumber not found in the oncoming request in the coorect form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"airplaneId not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"departureAirportId not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"arrivalAirportId not found in the oncoming request in the coorect form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.arrivalDate){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"arrivalDate not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.departureDate){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"departureDate not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.price){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"price not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.boardingGate){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"boardingGate not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"totalSeats not found in the oncoming request in the correct form"}

        return res.status(404).json({ErrorResponse});
    }
    if (new Date(req.body.arrivalDate).getTime() <= new Date(req.body.departureDate).getTime()) {
        
        ErrorResponse.message = "Something went wrong while craeting the flight";
        ErrorResponse.error = {explanation:"Arrival date should be more than departure date"}
        return res.status(400).json({ErrorResponse})
        }
    next();
}

module.exports = {
    validateCreateRequest
}