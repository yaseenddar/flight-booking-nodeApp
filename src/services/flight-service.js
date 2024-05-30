const { Op } = require('sequelize');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors')
const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
console.log("Data",data);
        const airplane = await flightRepository.create(data);
        return airplane;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError' ||error.name ==  'SequelizeUniqueConstraintError'){
            const explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            
            throw new AppError(explanation,400);
        }
        console.log(error)
        throw new AppError('Cannot create a new Flight object',500);
       
    }
}
async function getAllFlights(querry){
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00"
    if(querry.trips){
        [departureAirportId,arrivalAirportId] = querry.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // check these two are not same
    }
    if(querry.price){
        // console.log(querry.price)
        [minPrice,maxPrice] = querry.price.split("-");
        // console.log(minPrice,maxPrice)
        customFilter.price = {
            [Op.between]:[minPrice,maxPrice == undefined ? 80000 : maxPrice]
        }
        
    }
    if(querry.travellers){
        customFilter.totalSeats = {
            [Op.gte]:querry.travellers
        }
    }
    if(querry.tripDate){
        customFilter.departureDate = {
            [Op.between]:[querry.tripDate,querry.tripDate + " 23:59:00" ]
        }
    }
    if(querry.sort){
        const params = querry.sort.split(',');
        const sortFilters = params.map(param => param.split('_'));
        sortFilter = sortFilters;
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
        // console.log(flights)
        return flights;
    } catch (error) {
        console.log(error)
        throw new AppError("Cannot fetch data of all flights",500)
    }
}
module.exports ={
    createFlight,
    getAllFlights

}