
function anAsyncCall() {

  //return Promise.resolve(75);

  var aPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('inside!');
      resolve(88)
    }, 2000);
  });

  var promise = Promise.resolve();
  return promise.then(aPromise);
  // return promise.then(function () {
  //   setTimeout(function () {
  //     console.log('inside!');
  //     return 77;
  //   }, 2000);
  // });
}

anAsyncCall().then(function (value) {
  console.log('value : ' + value);
});