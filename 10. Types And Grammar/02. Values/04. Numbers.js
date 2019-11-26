var a = 42;
var b = 42.3;

var c = 0.42;
var d = .42;

var e = 42.0;
var f = 42.;

a = 42.300;
b = 42.0;
a; // 42.3
b; // 42

a = 5E10;
a; // 50000000000
a.toExponential(); // "5e+10"

b = a * a;
b; // 2.5e+21

c = 1 / a;
c; // 2e-11

//Because number values can be boxed with the Number object wrapper
//number values can access methods that are built into the Number.prototype
a = 42.59;

a.toFixed(0); // "43"
a.toFixed(1); // "42.6"
a.toFixed(2); // "42.59"
a.toFixed(3); // "42.590"
a.toFixed(4); // "42.5900"

//toPrecision(..) is similar, but specifies how many significant digits
//should be used to represent the value
a = 42.59;
a.toPrecision(1); // "4e+1"
a.toPrecision(2); // "43"
a.toPrecision(3); // "42.6"
a.toPrecision(4); // "42.59"
a.toPrecision(5); // "42.590"
a.toPrecision(6); // "42.5900"

// invalid syntax:
//42.toFixed(3); // SyntaxError

// these are all valid:
(42).toFixed(3); // "42.000"
0.42.toFixed(3); // "0.420"
42..toFixed(3); // "42.000"

0.1 + 0.2 === 0.3; // false