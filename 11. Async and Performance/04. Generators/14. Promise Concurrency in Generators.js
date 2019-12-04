function* foo() {
    //Because the r1 and r2 requests can -- and for performance reasons, 
    //should -- run concurrently, but in this code they will run sequentially;
    var r1 = yield request("http://some.url.1");
    var r2 = yield request("http://some.url.2");

    var r3 = yield request(
        "http://some.url.3/?v=" + r1 + "," + r2
    );

    console.log(r3);
}

// use previously defined `run(..)` utility
run(foo);

//The simplest approach
function* foo() {
    // make both requests "in parallel"
    var p1 = request("http://some.url.1");
    var p2 = request("http://some.url.2");

    // wait until both promises resolve
    //Either way, both p1 and p2 will run concurrently, and both have to 
    //finish, in either order, before the r3 = yield request.. 
    //Ajax request will be made.
    var r1 = yield p1;
    var r2 = yield p2;

    var r3 = yield request(
        "http://some.url.3/?v=" + r1 + "," + r2
    );

    console.log(r3);
}

// use previously defined `run(..)` utility
run(foo);

//the "gate" pattern, enabled by the Promise.all([ .. ]) utility
function* foo() {
    // make both requests "in parallel," and
    // wait until both promises resolve
    var results = yield Promise.all([
        request("http://some.url.1"),
        request("http://some.url.2")
    ]);

    var r1 = results[0];
    var r2 = results[1];

    var r3 = yield request(
        "http://some.url.3/?v=" + r1 + "," + r2
    );

    console.log(r3);
}

// use previously defined `run(..)` utility
run(foo);

//cleaner approach
// note: normal function, not generator
function bar(url1, url2) {
    return Promise.all([
        request(url1),
        request(url2)
    ]);
}

function* foo() {
    // hide the Promise-based concurrency details
    // inside `bar(..)`
    var results = yield bar(
        "http://some.url.1",
        "http://some.url.2"
    );

    var r1 = results[0];
    var r2 = results[1];

    var r3 = yield request(
        "http://some.url.3/?v=" + r1 + "," + r2
    );

    console.log(r3);
}

// use previously defined `run(..)` utility
run(foo);