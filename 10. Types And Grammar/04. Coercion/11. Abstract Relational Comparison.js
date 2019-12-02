var a = [42];
var b = ["43"];

a < b; // true
b < a; // false

var a = { b: 42 };
var b = { b: 43 };

a < b; // false
a == b; // false
a > b; // false

a <= b; // true
a >= b; // true

//<= as !( > )
//>= as !( < )