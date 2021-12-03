// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

/*
 fetchMyIP((error, ip) => {
   if (error) {
     console.log("It didn't work!" , error);
     return;
   }

   console.log('It worked! Returned IP:' , ip);
 });
 */
// It worked! Returned IP: 174.7.114.98

/*
fetchCoordsByIP('174.7.114.98', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
});

module.exports = { fetchCoordsByIP };
 */
// It worked! Returned coordinates: { latitude: 49.2584, longitude: -123.1456 }

/*
fetchISSFlyOverTimes(
  { latitude: '49.27670', longitude: '-123.13000' },
  (error, times) => {
    if (error) {
      console.log('It did not work!', error);
      return;
    }
    console.log('It worked!, Return flyover times', times);
  }
);
module.exports = { fetchISSFlyOverTimes };

It worked!, Return flyover times [
  { duration: 582, risetime: 1638563846 },
  { duration: 658, risetime: 1638569591 },
  { duration: 657, risetime: 1638575408 },
  { duration: 660, risetime: 1638581228 }
]
 */
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

module.exports = { printPassTimes };
