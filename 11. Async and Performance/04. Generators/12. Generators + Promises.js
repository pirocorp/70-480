//Promise-based approach to our running Ajax example:
function foo(x, y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y
    );
}

foo(11, 31)
    .then(
        function (text) {
            console.log(text);
        },
        function (err) {
            console.error(err);
        }
    );

//Promises and Generators
function foo(x, y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y
    );
}

function *main() {
    try {
        var text = yield foo(11, 31);
        console.log(text);
    }
    catch (err) {
        console.error(err);
    }
}

var it = main();

var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
    function (text) {
        it.next(text);
    },
    function (err) {
        it.throw(err);
    }
);