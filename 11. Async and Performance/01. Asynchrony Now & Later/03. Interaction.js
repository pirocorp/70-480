//to address such a race condition, you can coordinate ordering interaction
var res = [];

function response(data) {
    if (data.url == "http://some.url.1") {
        res[0] = data;
    }
    else if (data.url == "http://some.url.2") {
        res[1] = data;
    }
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.1", response);
ajax("http://some.url.2", response);

//Some concurrency scenarios are always broken (not just sometimes) without coordinated interaction
var a, b;

function foo(x) {
    a = x * 2;
    if (a && b) {
        baz();
    }
}

function bar(y) {
    b = y * 2;
    if (a && b) {
        baz();
    }
}

function baz() {
    console.log(a + b);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.1", foo);
ajax("http://some.url.2", bar);

//The if (a && b) conditional around the baz() call is traditionally called a "gate,"

//it's OK for the "race" to the finish line to have only one winner.
var a;

function foo(x) {
    if (a == undefined) {
        a = x * 2;
        baz();
    }
}

function bar(x) {
    if (a == undefined) {
        a = x / 2;
        baz();
    }
}

function baz() {
    console.log(a);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.1", foo);
ajax("http://some.url.2", bar);

//The if (a == undefined) conditional allows only the first of foo() or bar() through