function getURL(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

var URL = 'http://httpbin.org/get';

getURL(URL).then(function (value) {
  console.log(value);
}).catch(function (error) {
  console.log(error);
});