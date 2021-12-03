const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(body => {
    for (const passTime of body) {
      let date = new Date(passTime.risetime);
      let duration = passTime.duration;
      console.log(`Next pass ${date} for ${duration} seconds.`);
    }
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
