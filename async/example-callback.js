const weather = require('./weather');
const location = require('./location.js');
const argv =  require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string',
  })
  .help('help')
  .argv;

if (typeof argv.l === 'string' && argv.length > 0) {
  
  weather(argv.l, function (currentWeather) {
    console.log(currentWeather)
  })
} else {
  console.log('No location given');
  location(function (location) {
    if (location) {
      weather(location.city, function(currentWeather) {
        console.log(currentWeather)
      })
    } else {
      console.log('Unable to guess location')
    }
  })
}