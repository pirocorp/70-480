function* main() {
    var x = yield "Hello World";

    yield x.toLowerCase();	// cause an exception!
}

var it = main();

it.next().value;			// Hello World

try {
    it.next(42);
}
catch (err) {
    console.error(err);	// TypeError
}

//----------------------------------------------------------
function* main() {
    var x = yield "Hello World";

    // never gets here
    console.log(x);
}

var it = main();

it.next();

try {
    // will `*main()` handle this error? we'll see!
    it.throw("Oops");
}
catch (err) {
    // nope, didn't handle it!
    console.error(err);			// Oops
}