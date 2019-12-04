var x = 1;

function *foo() {
    x++;
    yield; // pause!
    console.log("x:", x);
}

function bar() {
    x++;
}

// construct an iterator `it` to control the generator
var it = foo();

// start `foo()` here!
it.next();
console.log(x);						// 2
bar();
console.log(x);						// 3
it.next();				// x: 3