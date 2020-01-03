// Code your solution in this file!

const returnFirstTwoDrivers = function (arrayOfDrivers) {
    let newArray = []
    newArray.push(arrayOfDrivers[0])
    newArray.push(arrayOfDrivers[1])
    return newArray
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
    let newArray = [arrayOfDrivers[arrayOfDrivers.length - 2], arrayOfDrivers[arrayOfDrivers.length - 1]]
    return newArray
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer
    }
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, functionOfDriver) {
    return functionOfDriver(arrayOfDrivers)
}