const { FlightService } = require("../services")

const {ErrorResponse, SuccessResponse} = require('../utils/common')
 async function  createFlight(req,res){
    try {
        // console.log("in controller",req.body)
        const airplane = await FlightService.createFlight({
           
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalDate: req.body.arrivalDate,
            departureDate: req.body.departureDate,
            price: req.body.price,
            totalSeats: req.body.totalSeats,
            boardingGate: req.body.boardingGate,
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
async function getAllFlights(req,res){
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
        
    }
}
async function  getFlight(req,res){
    try {
        // console.log("in controller",req.body)
        const flight = await FlightService.getFlight(req.params.id)
       SuccessResponse.data = flight;
        
        return res.status(200).json({SuccessResponse})
    } catch (error) {
        
        ErrorResponse.error = {
            errorCode:error.statusCode,
            explanation:error.message
        };
      
        return res.status(error.statusCode).json({ErrorResponse})
    }
}
async function updateTheSeats(req,res){
    const flightId = req.params.id;
    const seats = req.body.seats;
    const dec = req.body.dec;
    try {
        const flight = await FlightService.updateTheSeats(flightId,seats,dec);
        SuccessResponse.data = flight;
        
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
    createFlight,
    getAllFlights,
    getFlight,
    updateTheSeats

}