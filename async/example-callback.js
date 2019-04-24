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
  
  weather(argv.l).then((currentWeather) => {
    console.log(currentWeather);
    
  })
  .catch((error) => {
    console.log(error)
  })

} else {
  console.log('No location given');

  location().then((loc) => {
    return weather(loc.city);
  }).then((currentWeather) => {
    console.log(currentWeather);
  }).catch((error) => {
    console.log(error);
  })
}