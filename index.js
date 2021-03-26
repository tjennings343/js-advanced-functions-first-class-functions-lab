// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    let drivers = arr.slice(0,2)
    return drivers

}

const returnLastTwoDrivers = function(arr){
    let lastDrivers = arr.slice(-2)
    return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply){
    return function(num){
        let fare = multiply * num
        return fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectedDrivers){
    let newDrivers = selectedDrivers(drivers)
    return newDrivers
}