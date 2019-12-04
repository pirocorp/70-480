function* foo() {
    console.log("inside `*foo()`:", yield "B");

    console.log("inside `*foo()`:", yield "C");

    return "D";
}

function* bar() {
    console.log("inside `*bar()`:", yield "A");

    // `yield`-delegation!
    console.log("inside `*bar()`:", yield* foo());

    console.log("inside `*bar()`:", yield "E");

    return "F";
}

var it = bar();

console.log("outside:", it.next().value);
// outside: A

console.log("outside:", it.next(1).value);
// inside `*bar()`: 1
// outside: B

console.log("outside:", it.next(2).value);
// inside `*foo()`: 2
// outside: C

console.log("outside:", it.next(3).value);
// inside `*foo()`: 3
// inside `*bar()`: D
// outside: E

console.log("outside:", it.next(4).value);
// inside `*bar()`: 4
// outside: F

//--------------------------------------------------------------------------
function* bar() {
    console.log("inside `*bar()`:", yield "A");

    // `yield`-delegation to a non-generator!
    console.log("inside `*bar()`:", yield* ["B", "C", "D"]);

    console.log("inside `*bar()`:", yield "E");

    return "F";
}

var it = bar();

console.log("outside:", it.next().value);
// outside: A

console.log("outside:", it.next(1).value);
// inside `*bar()`: 1
// outside: B

console.log("outside:", it.next(2).value);
// outside: C

console.log("outside:", it.next(3).value);
// outside: D

console.log("outside:", it.next(4).value);
// inside `*bar()`: undefined
// outside: E

console.log("outside:", it.next(5).value);
// inside `*bar()`: 5
// outside: F

//Exceptions Delegated, Too!

function* foo() {
    try {
        yield "B";
    }
    catch (err) {
        console.log("error caught inside `*foo()`:", err);
    }

    yield "C";

    throw "D";
}

function* bar() {
    yield "A";

    try {
        yield* foo();
    }
    catch (err) {
        console.log("error caught inside `*bar()`:", err);
    }

    yield "E";

    yield* baz();

    // note: can't get here!
    yield "G";
}

function* baz() {
    throw "F";
}

var it = bar();

console.log("outside:", it.next().value);
// outside: A

console.log("outside:", it.next(1).value);
// outside: B

console.log("outside:", it.throw(2).value);
// error caught inside `*foo()`: 2
// outside: C

console.log("outside:", it.next(3).value);
// error caught inside `*bar()`: D
// outside: E

try {
    console.log("outside:", it.next(4).value);
}
catch (err) {
    console.log("error caught outside:", err);
}
// error caught outside: F