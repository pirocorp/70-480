//The not number, number
var a = 2 / "foo";

a == NaN; // false
a === NaN; // false

NaN !== NaN

a = 2 / "foo";
isNaN(a); // true

//Infinities
var a = 1 / 0; // Infinity
var b = -1 / 0; // -Infinity

