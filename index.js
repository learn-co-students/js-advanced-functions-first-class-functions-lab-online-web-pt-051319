// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
    return [driversArray[0], driversArray[1]]
}

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) { 
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, funxion) {
    return funxion(drivers)
}