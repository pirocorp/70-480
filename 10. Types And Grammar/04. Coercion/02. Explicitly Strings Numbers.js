//explicitly coercing between the two types
var a = 42;
var b = String(a);

var c = "3.14";
var d = Number(c);

b; // "42"
d; // 3.14

console.log(~(-1));

//Explicitly: Parsing Numeric Strings
var a = "42";
var b = "42px";

Number(a); // 42
parseInt(a); // 42

Number(b); // NaN
parseInt(b); // 42

//parseInt examples
var x = parseInt(1/0, 19); // 18
parseInt(0.000008); // 0 ("0" from "0.000008")
parseInt(0.0000008); // 8 ("8" from "8e-7")
parseInt(false, 16); // 250 ("fa" from "false")
parseInt(parseInt, 16); // 15 ("f" from "function..")
parseInt("0x10"); // 16
parseInt("103", 2); // 2