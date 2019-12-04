function *foo(x) {
    //At that point, it pauses *foo(..)
    //and essentially requests the calling code to provide a result value
    //for the yield expression
    var y = x * (yield);
    return y;
}

var it = foo(6);

// start `foo(..)`
it.next();

//is passing the 7 value back in to be that result of the paused yield expression.
var res = it.next(7);

console.log(res.value);		// 42