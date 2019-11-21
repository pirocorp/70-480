//Ignored this
function foo() {
    console.log(this.a);
}

var a = 2;

//If you pass null or undefined as a this binding parameter to call,
//apply, or bind, those values are effectively ignored, and instead the
//default binding rule applies to the invocation:
foo.call(null); // 2

//It’s quite common to use apply(..) for spreading out arrays of values
//as parameters to a function call.Similarly, bind(..) can curry parameters
//(preset values), which can be very helpful:
function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// spreading out array as parameters
foo.apply(null, [2, 3]); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3

//Safer this
//Object.create(null) is similar to { }, but without the delegation to 
//Object.prototype, so it’s “more empty” than just { }:
function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// our DMZ empty object
var ø = Object.create(null);

// spreading out array as parameters
foo.apply(ø, [2, 3]); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3

//Indirection
//“indirect references” to functions, and in those cases, when that
//function reference is invoked, the default binding rule also applies.
function foo() {
    console.log(this.a);
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
//The result value of the assignment expression p.foo = o.foo is a
//reference to just the underlying function object.
//e.g. so we call foo()
(p.foo = o.foo)(); // 2