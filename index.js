const returnFirstTwoDrivers = (d) => {
	return d.slice(0,2)
}

const returnLastTwoDrivers = (d) => {
	return d.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (factor) => {
	return (fare) => factor * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (aod, fn) => {
	return fn(aod)
}
