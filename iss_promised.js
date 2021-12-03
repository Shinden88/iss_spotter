const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = body => {
  const IP = JSON.parse(body);
  return request(`https://freegeoip.app/json/${IP.ip}`);
};

const fetchISSFlyOverTimes = data => {
  const coords = {};
  coords['latitude'] = JSON.parse(data)['latitude'];
  coords['longitude'] = JSON.parse(data)['longitude'];
  return request(
    `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`
  );
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const passTimes = JSON.parse(body).response;
      return passTimes;
    });
};

module.exports = { nextISSTimesForMyLocation };
