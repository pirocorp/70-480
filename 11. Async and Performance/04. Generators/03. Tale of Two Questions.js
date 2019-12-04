function* foo(x) {
    var y = x * (yield "Hello");	// <-- yield a value!
    return y;
}

var it = foo(6);

var res = it.next();	// first `next()`, don't pass anything
console.log(res.value);				// "Hello"

res = it.next(7);		// pass `7` to waiting `yield`
console.log(res.value);					// 42