//Calling Too Early
//Promises by definition cannot be susceptible to this concern, 
//because even an immediately fulfilled Promise 
//(like new Promise(function(resolve){ resolve(42); })) cannot be 
//observed synchronously.

//That is, when you call then(..) on a Promise, even if that Promise was 
//already resolved, the callback you provide to then(..) will always be 
//called asynchronously

//Calling Too Late
//Similar to the previous point, a Promise's then(..) registered observation
//callbacks are automatically scheduled when either resolve(..) or reject(..)
//are called by the Promise creation capability. Those scheduled callbacks 
//will predictably be fired at the next asynchronous moment
p.then(function () {
    p.then(function () {
        console.log("C");
    });

    console.log("A");
});

p.then(function () {
    console.log("B");
});
// A B C
//Here, "C" cannot interrupt and precede "B", 
//by virtue of how Promises are defined to operate.

//Never Calling the Callback
//First, nothing (not even a JS error) can prevent a Promise from 
//notifying you of its resolution

// a utility for timing out a Promise
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timeout!");
        }, delay);
    });
}

// setup a timeout for `foo()`
Promise.race([
    foo(),					// attempt `foo()`
    timeoutPromise(3000)	// give it 3 seconds
]).then(
        function () {
            // `foo(..)` fulfilled in time!
        },

        function (err) {
            // either `foo()` rejected, or it just
            // didn't finish in time, so inspect
            // `err` to know which
        }
    );

//Calling Too Few or Too Many Times
//Promises are defined so that they can only be resolved once.
//Because a Promise can only be resolved once, any then(..) registered 
//callbacks will only ever be called once (each).

//Failing to Pass Along Any Parameters/Environment
//Promises can have, at most, one resolution value (fulfillment or rejection).
//Something to be aware of: If you call resolve(..) or reject(..) with 
//multiple parameters, all subsequent parameters beyond the first will be 
//silently ignored.

//If you want to pass along multiple values, you must wrap them in another 
//single value that you pass, such as an array or an object.

//Swallowing Any Errors/Exceptions
var p = new Promise(function (resolve, reject) {
    foo.bar();	// `foo` is not defined, so error!
    resolve(42);	// never gets here :(
});

p.then(
    function fulfilled() {
        // never gets here :(
    },
    function rejected(err) {
        // `err` will be a `TypeError` exception object
        // from the `foo.bar()` line.
    }
);

//Trustable Promise?
//If you pass an immediate, non-Promise, non-thenable value to 
//Promise.resolve(..), you get a promise that's fulfilled with 
//that value. In other words, these two promises p1 and p2 will 
//behave basically identically:
var p1 = new Promise(function (resolve, reject) {
    resolve(42);
});

var p2 = Promise.resolve(42);

//But if you pass a genuine Promise to Promise.resolve(..), 
//you just get the same promise back:
var p1 = Promise.resolve(42);

var p2 = Promise.resolve(p1);

p1 === p2; // true

//if you pass a non-Promise thenable value to Promise.resolve(..), 
//it will attempt to unwrap that value, and the unwrapping will keep 
//going until a concrete final non-Promise-like value is extracted.
var p = {
    then: function (cb) {
        cb(42);
    }
};

// this works OK, but only by good fortune
p
    .then(
        function fulfilled(val) {
            console.log(val); // 42
        },
        function rejected(err) {
            // never gets here
        }
    );

var p = {
    then: function (cb, errcb) {
        cb(42);
        errcb("evil laugh");
    }
};

p
    .then(
        function fulfilled(val) {
            console.log(val); // 42
        },
        function rejected(err) {
            // oops, shouldn't have run
            console.log(err); // evil laugh
        }
    );

//Nonetheless, we can pass either of these versions of p to 
//Promise.resolve(..), and we'll get the normalized, safe result we'd expect:
Promise.resolve(p)
    .then(
        function fulfilled(val) {
            console.log(val); // 42
        },

        function rejected(err) {
            // never gets here
        }
    );
//Promise.resolve(..) will accept any thenable, and will unwrap it to 
//its non-thenable value. But you get back from Promise.resolve(..) a real, 
//genuine Promise in its place, one that you can trust.
// don't just do this:
foo(42)
    .then(function (v) {
        console.log(v);
    });

// instead, do this:
Promise.resolve(foo(42))
    .then(function (v) {
        console.log(v);
    });

//Another beneficial side effect of wrapping Promise.resolve(..) 
//around any function's return value (thenable or not) is that it's 
//an easy way to normalize that function call into a well-behaving async 
//task. If foo(42) returns an immediate value sometimes, or a Promise 
//other times, Promise.resolve( foo(42) ) makes sure it's always a 
//Promise result. 