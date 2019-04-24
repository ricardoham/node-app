function doWork (data) {
  return new Promise(function (resolve, reject) {
    resolve('Everythin worked');
    reject({
      error: 'Some error'
    });
  });
}

doWork('some data').then(function (data) {
  console.log(data);
});
