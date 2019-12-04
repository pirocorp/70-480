function foo(x) {
    // start doing something that could take a while

    // construct and return a promise
    //The Revealing Constructor Pattern
    return new Promise(function (resolve, reject) {
        // eventually, call `resolve(..)` or `reject(..)`,
        // which are the resolution callbacks for
        // the promise.
    });
}

var p = foo(42);

bar(p);

baz(p);

function bar(fooPromise) {
    // listen for `foo(..)` to complete
    fooPromise.then(
        function () {
            // `foo(..)` has now finished, so
            // do `bar(..)`'s task
        },
        function () {
            // oops, something went wrong in `foo(..)`
        }
    );
}

// ditto for `baz(..)`

//Another way to approach this is:
function bar() {
    // `foo(..)` has definitely finished, so
    // do `bar(..)`'s task
}

function oopsBar() {
    // oops, something went wrong in `foo(..)`,
    // so `bar(..)` didn't run
}

// ditto for `baz()` and `oopsBaz()`

var p = foo(42);

//If you've seen Promise-based coding before, you might be tempted to believe
//that the last two lines of that code could be written as 
//p.then( .. ).then( .. ), using chaining, rather than 
//p.then(..); p.then(..). That would have an entirely different behavior, 
//so be careful!
p.then(bar, oopsBar);

p.then(baz, oopsBaz);