const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num;
  };
}

const fareDoubler = function(num) {
  return num * 2;
};

const fareTripler = function(num) {
  return num * 3;
};

function selectDifferentDrivers(drivers, selection) {
  return selection(drivers);
}
