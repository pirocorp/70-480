//explicit coercion of a symbol to a string is allowed,
//but implicit coercion of the same is disallowed and throws an error.
var s1 = Symbol("cool");
String(s1); // "Symbol(cool)"

var s2 = Symbol("not cool");
s2 + ""; // TypeError