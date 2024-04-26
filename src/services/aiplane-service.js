const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors')
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            const explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            
            throw new AppError(explanation,400);
        }
        throw new AppError('Cannot create a new Airplane object',500);
       
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch the data of all airplanes',500);
        
    }
}
async function getAirplane(id){
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    } catch (error) {
        if(error.statusCode == 404){
            throw new AppError('The plane you looking for is not found',404);
        }
        throw new AppError('Cannot fetch the data of all airplanes',500);
        
    }
}
async function destroyAirplane(id){
    try {
        const airplanes = await airplaneRepository.destroy(id);
        return airplanes;
    } catch (error) {
        if(error.statusCode == 404){
            throw new AppError('The plane you looking to delete is not found',404);
        }
        throw new AppError('Cannot fetch the data of all airplanes',500);
        
    }
}
module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}