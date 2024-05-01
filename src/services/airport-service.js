const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors')
const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError' ||error.name ==  'SequelizeUniqueConstraintError'){
            const explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            
            throw new AppError(explanation,400);
        }
        console.log(error)
        throw new AppError('Cannot create a new Airplane object',500);
       
    }
}

async function getAirports(){
    try {
        console.log("getall")
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch the data of all airports',500);
        
    }
}
async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == 404){
            throw new AppError('The airport you looking for is not found',404);
        }
        throw new AppError('Cannot fetch the data of all airports',500);
        
    }
}
async function destroyAirport(id){
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode == 404){
            throw new AppError('The airport you looking to delete is not found',404);
        }
        throw new AppError('Cannot fetch the data of airport',500);
        
    }
}
module.exports ={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}