const request = require('request');

module.exports = function (location, callback) {
  const encodedLocation = encodeURIComponent(location);
  const url = 'https://localhostq=' + encodedLocation + 'rest of url';

  encodeURIComponent(location)

  if (!location) {
    return callback('No Location has found')
  }

  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather');
    } else {
      callback('It\'s' + body.main.temp + 'in' + body.main.name + '!')
    }
  });
}