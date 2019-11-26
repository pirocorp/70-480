//Strings are array-like in JS.
var a = "foo";
var b = ["f", "o", "o"];

a.length; // 3
b.length; // 3

a.indexOf("o"); // 1
b.indexOf("o"); // 1

var c = a.concat("bar"); // "foobar"
var d = b.concat(["b", "a", "r"]); // ["f","o","o","b","a","r"]

a === c; // false
b === d; // false

a; // "foo"
b; // ["f","o","o"]

a[1] = "O"; //Correct syntax a.charAt(1).
b[1] = "O";

//JavaScript strings are immutable, while arrays are quite mutable.
a; // "foo"
b; // ["f","O","o"]

//A further consequence of immutable strings is that none of the
//string methods that alter its contents can modify in -place, but
//rather must create and return new strings.
c = a.toUpperCase();
a === c; // false
a; // "foo"
c; // "FOO"

b.push("!");
b; // ["f","O","o","!"]

a.join; // undefined
a.map; // undefined

var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + ".";
}).join("");

c; // "f-o-o"
d; // "F.O.O."

a.reverse; // undefined
b.reverse(); // ["!","o","O","f"]
b; // ["!","o","O","f"]