var a = "42";
var b = "0";
var c = 42;
var d = 0;

console.log(a + b); // "420"
console.log(c + d); // 42

var e = [1, 2];
var f = [3, 4];

console.log(e + f); // "1,23,4"

var g = 42;
var h = a + "";
console.log(h); // "42"

var z = {
    valueOf: function () { return 42; },
    toString: function () { return 4; }
};

console.log(z + ""); // "42"
console.log(String(z)); // "4"

var i = "3.14";
var j = i - 0;

console.log(j); // 3.14

var a1 = [3];
var b1 = [1];
console.log(a1 - b1); // 2