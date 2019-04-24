const currentDate = new Date().toString();

module.exports = middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('Private rote hit');
    next();
  },
  logger: function (req, res, next) {
    console.log('Request' + req.method + currentDate + ' ' + req.originalUrl);
    next();
  }
};