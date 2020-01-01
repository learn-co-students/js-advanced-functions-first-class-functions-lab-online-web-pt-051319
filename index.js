// Code your solution in this file!
const returnFirstTwoDrivers = driversArray => {
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = driversArray => {
  return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function(multiplier) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, fcn) {
  return fcn(driversArray);
}
