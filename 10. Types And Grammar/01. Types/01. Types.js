//The ECMAScript language types are 
//Undefined, Null, Boolean, String, Number, Object ans Symbol—added in ES6!.

//All of these types except object are called “primitives.”

//a type is an intrinsic, builtin set of characteristics 
//that uniquely identifies the behavior of a particular
//value and distinguishes it from other values, both to the
//engine and to the developer.
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true

// added in ES6!
typeof Symbol() === "symbol"; // true

//If you want to test for a null value using its type, 
//you need a compound condition:
var a = null;
//null is the only primitive value that is “falsy”
(!a && typeof a === "object"); // true

//So what’s the seventh string value that typeof can return?
//function is referred to as a “callable object” — an object that has an 
//internal[[Call]] property that allows it to be invoked.
typeof function a() { /* .. */ } === "function"; // true

//The fact that functions are actually objects is quite useful. Most
//importantly, they can have properties.For example:
function e(b, c) {
    /* .. */
}

//“length of the function” is 2. Because we have two parameters
e.length; // 2

//Arrays
//also as a “subtype” of object with additional
//characteristics of being numerically indexed
typeof [1, 2, 3] === "object"; // true