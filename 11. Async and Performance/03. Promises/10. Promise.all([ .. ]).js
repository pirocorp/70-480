// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");

Promise.all([p1, p2])
    .then(function (msgs) {
        // both `p1` and `p2` fulfill and pass in
        // their messages here
        return request(
            "http://some.url.3/?v=" + msgs.join(",")
        );
    })
    .then(function (msg) {
        console.log(msg);
    });