const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)
}