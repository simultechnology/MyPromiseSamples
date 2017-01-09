
function asyncFunction() {

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Async!!!')
    }, 1600);
  });
}

asyncFunction().then(function (value) {
  console.log(value);
}).catch(function (error) {
  console.log(error);
});