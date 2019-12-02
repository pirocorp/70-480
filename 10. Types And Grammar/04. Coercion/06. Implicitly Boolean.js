var a = 42;
var b = "abc";
var c;
var d = null;

if (a) {
    console.log("yep"); // yep
}

while (c) {
    console.log("nope, never runs");
}

c = d ? a : b;
c; // "abc"

if ((a && d) || c) {
    console.log("yep"); // yep
}

//The value produced by a && or || operator is not necessarily of type
//Boolean.The value produced will always be the value of one of the
//two operand expressions.
var a = 42;
var b = "abc";
var c = null;

a || b; // 42
a && b; // "abc"

c || b; // "abc"
c && b; // null

//For the || operator, if the test is true, the || expression results in
//the value of the first operand(a or c).If the test is false, the ||
//expression results in the value of the second operand(b).

//Inversely, for the && operator, if the test is true, the && expression
//results in the value of the second operand(b).If the test is false, the
//&& expression results in the value of the first operand (a or c).

//Another way of thinking about these operators:
a || b;
// roughly equivalent to:
a ? a : b;


a && b;
// roughly equivalent to:
a ? b : a;

//An extremely common and helpful usage of this behavior, which there’s 
//a good chance you may have used before and not fully understood, is:
function foo(a, b) {
    a = a || "hello";
    b = b || "world";

    console.log(a + " " + b);
}

foo(); // "hello world"
foo("yeah", "yeah!"); // "yeah yeah!"

function bar() {
    console.log(a);
}
var d = 42;

//if (d) { bar(); }
d && bar(); // 42

//Example
var a = 42;
var b = null;
var c = "foo";

//The a && (b || c) expression actually results in "foo", not true.
//So, the if statement then forces the "foo"
//value to coerce to a boolean, which of course will be true.
if (a && (b || c)) {
    console.log("yep");
}