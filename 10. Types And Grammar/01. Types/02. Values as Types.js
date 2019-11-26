//In JavaScript, variables don’t have types—values have types.

//The value 42 has an intrinsic type of number, 
//and its type cannot be changed.
var a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

//The typeof operator always returns a string. So:
typeof typeof 42; // "string"

//undefined Versus “undeclared”
//Variables that have no value currently actually have the undefined
//value.Calling typeof against such variables will return "undefined"
var f;
typeof f; // "undefined"

var b = 42;
var c;

// later
b = c;

typeof b; // "undefined"
typeof c; // "undefined"

//An “undefined” variable is one that has been declared in the accessible
//scope, but at the moment has no other value in it.By contrast, an
//“undeclared” variable is one that has not been formally declared in
//the accessible scope.
var x;
x; // undefined
y; // ReferenceError: y is not defined

typeof x; // "undefined"
typeof y; // "undefined"