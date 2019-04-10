const weather = require('./weather');
const location = require('./location.js');

weather(function (currentWeather) {
  console.log(currentWeather);
});

location(function (location) {
  if (!location) {
    console.log('Unable to guess location');
    return;
  }

  console.log('City: ' + location.city);
  console.log('log/lat' + location.loc);
})

