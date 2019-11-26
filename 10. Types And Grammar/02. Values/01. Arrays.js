var a1 = [1, "2", [3]];

a1.length; // 3
a1[0] === 1; // true
a1[2][0] === 3; // true

var a2 = [];
a2.length; // 0
a2[0] = 1;
a2[1] = "2";
a2[2] = [3];
a2.length; // 3

//Automatically string coercion
var a3 = [];
a3["13"] = 42;
console.log(a3.length); // 14