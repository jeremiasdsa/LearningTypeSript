"use strict";
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log("MeuResult: " + result);
});
function sendRequest(data, cb) {
    return cb({ data: '2Hi there!' });
}
sendRequest('Send this2!', function (response) {
    console.log(response);
    return true;
});
