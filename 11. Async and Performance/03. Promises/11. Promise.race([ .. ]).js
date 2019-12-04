// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");

Promise.race([p1, p2])
    .then(function (msg) {
        // either `p1` or `p2` will win the race
        return request(
            "http://some.url.3/?v=" + msg
        );
    })
    .then(function (msg) {
        console.log(msg);
    });