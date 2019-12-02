var a = "0";
var b = [];
var c = {};
var d = "";
var e = 0;
var f = null;
var g;

console.log(Boolean(a)); // true
console.log(Boolean(b)); // true
console.log(Boolean(c)); // true
console.log(Boolean(d)); // false
console.log(Boolean(e)); // false
console.log(Boolean(f)); // false
console.log(Boolean(g)); // false

//Just like the unary + operator coerces a value to a number, 
//the unary! negate operator explicitly coerces a value to a boolean.
//The problem is that it also flips the value from truthy to
//falsy or vice versa.So, the most common way JS developers explicitly 
//coerce to boolean is to use the !! double - negate operator
console.log(!!a); // true
console.log(!!b); // true
console.log(!!c); // true
console.log(!!d); // false
console.log(!!e); // false
console.log(!!f); // false
console.log(!!g); // false

//Any of these ToBoolean coercions would happen implicitly without
//the Boolean(..) or!! , if used in a boolean context such as an if
//(..) ..statement.

//The ? : ternary operator will test a for truthiness, and based on that
//test will either assign true or false to b, accordingly.
var x = 42;
var y = x ? true : false;