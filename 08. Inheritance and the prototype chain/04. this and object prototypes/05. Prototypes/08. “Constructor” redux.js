function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // create a new prototype object

var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!

//a1.constructor is extremely unreliable, and it’s an unsafe reference
//to rely upon in your code.Generally, such references should be avoided
//where possible.