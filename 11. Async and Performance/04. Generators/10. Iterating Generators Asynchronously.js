//From Callback approach
function foo(x, y, cb) {
    ajax(
        "http://some.url.1/?x=" + x + "&y=" + y,
        cb
    );
}

foo(11, 31, function (err, text) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(text);
    }
});

//If we wanted to express this same task flow control with a generator, 
//we could do:
function foo(x, y) {
    ajax(
        "http://some.url.1/?x=" + x + "&y=" + y,
        function (err, data) {
            if (err) {
                // throw an error into `*main()`
                it.throw(err);
            }
            else {
                // resume `*main()` with received `data`
                it.next(data);
            }
        }
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

// start it all up!
it.next();

//In yield foo(11,31), first the foo(11,31) call is made, 
//which returns nothing (aka undefined), so we're making a call to request 
//data, but we're actually then doing yield undefined. That's OK, 
//because the code is not currently relying on a yielded value to do 
//anything interesting