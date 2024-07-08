function addRowLockOnFlights(flightId){
    return `SELECT * From Flights Where Flights.id = ${flightId} FOR UPDATE`
}

module.exports ={
    addRowLockOnFlights
}