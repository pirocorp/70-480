//Most expressions don’t have side effects. For example:
var a = 2;
var b = a + 3;

//The most common example of an expression with (possible) side
//effects is a function call expression:
function foo() {
    a = a + 1;
}

foo(); // result: `undefined`, side effect: changed `a`

//There are other side-effecting expressions
var c = 42;
var d = c++;

c; // 43
d; // 42

a++; // 42
a; // 43

++a; // 44
a; // 44


var a = 42;
var b = (a++);

a; // 43
b; // 42

//the , statement-series comma operator.
//This operator allows you to string together multiple standalone
//expression statements into a single statement
var a = 42, b;
b = (a++ , a);

a; // 43
b; // 43

//Delete
var obj = {
    a: 42
};

obj.a; // 42
delete obj.a; // true
obj.a; // undefined

var a;
a = 42; // 42
a; // 42

var a, b, c;
a = b = c = 42;