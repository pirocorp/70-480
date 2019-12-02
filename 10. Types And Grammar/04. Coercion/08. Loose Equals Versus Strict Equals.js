//Loose equals is the == operator, and strict equals is the === operator.

//The correct description is: "== allows coercion in the equality comparison
//and === disallows coercion.”
var a = 42;
var b = "42";

a === b; // false
a == b; // true

//Comparing: anything to boolean
var a = "42";
var b = true;

a == b; // false

//-----
var a = "42";

// bad (will fail!):
if (a == true) {
    // ..
}

// also bad (will fail!):
if (a === true) {
    // ..
}

// good enough (works implicitly):
if (a) {
    // ..
}

// better (works explicitly):
if (!!a) {
    // ..
}

// also great (works explicitly):
if (Boolean( a )) {
    // ..
}

//Comparing: nulls to undefineds
var a = null;
var b;

a == b; // true
a == null; // true
b == null; // true

a == false; // false
b == false; // false
a == ""; // false
b == ""; // false
a == 0; // false
b == 0; // false

//Comparing: objects to nonobjects
var a = 42;
var b = [42];

a == b; // true

var a = "abc";
var b = Object(a); // same as `new String( a )`

a === b; // false
a == b; // true

var a = null;
var b = Object(a); // same as `Object()`
a == b; // false

var c = undefined;
var d = Object(c); // same as `Object()`
c == d; // false

var e = NaN;
var f = Object(e); // same as `new Number( e )`
e == f; // false