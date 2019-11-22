function Foo() {
    // ...
}

//The Foo.prototype object by default gets a public, non enumerable
//property called.constructor, and this property is a reference 
//back to the function that the object is associated with.
Foo.prototype.constructor === Foo; // true


//constructor call -> calling normal function with new keyword in front
//In fact, new sort of hijacks any normal function and calls it in a 
//fashion that constructs an object, in addition to whatever else 
//it was going to do.
var a = new Foo();
a.constructor === Foo; // true