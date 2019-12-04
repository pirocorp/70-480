function* foo() {
    console.log("`*foo()` starting");
    yield 3;
    yield 4;
    console.log("`*foo()` finished");
}

function* bar() {
    yield 1;
    yield 2;
    yield* foo();	// `yield`-delegation!
    yield 5;
}

var it = bar();

it.next().value;	// 1
it.next().value;	// 2
it.next().value;	// `*foo()` starting
// 3
it.next().value;	// 4
it.next().value;	// `*foo()` finished
                    // 5
                    
//-------------------------------------------------------------------
function* foo() {
    var r2 = yield request("http://some.url.2");
    var r3 = yield request("http://some.url.3/?v=" + r2);

    return r3;
}

function* bar() {
    var r1 = yield request("http://some.url.1");

    // "delegating" to `*foo()` via `yield*`
    var r3 = yield* foo();

    console.log(r3);
}

run(bar);