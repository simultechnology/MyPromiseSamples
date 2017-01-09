
function doubleUp(value) {
  return value * 2;
}
function increment(value, arg2) {
  console.log(value);
  console.log(arg2);
  return value + 1;
}
function output(value) {
  console.log(value)
}

var promise = Promise.resolve(1);

var result = promise
  .then(increment)
  .then(doubleUp)
  .then(output)
  .catch(function (error) {
    console.log(error);
  });

console.log(result);

setTimeout(function () {
  console.log(result);
}, 0);