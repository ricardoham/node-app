const request = require('request');

module.exports = function (location) {
  return new Promise(function (resolve, reject) {
    const encodedLocation = encodeURIComponent(location);
    const url = 'https://localhostq=' + encodedLocation + 'rest of url';
  
    encodeURIComponent(location)
  
    if (!location) {
      return reject('No Location has found')
    }
  
    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch weather');
      } else {
        resolve('It\'s' + body.main.temp + 'in' + body.main.name + '!')
      }
    });
  });
}