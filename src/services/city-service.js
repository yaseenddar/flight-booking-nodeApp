const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors')
const cityRepository = new CityRepository();

async function createCity(data){
    try { 
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError' || error.name ==  'SequelizeUniqueConstraintError'){
            const explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            
            throw new AppError(explanation,400);
        }
        
        throw new AppError('Cannot create a new city object',500);
       
    }
}
module.exports = {
    createCity
}
