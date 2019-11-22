//Inspecting an instance (just an object in JS) for its
//inheritance ancestry(delegation linkage in JS) is often called 
//introspection(or reflection) in traditional class-oriented environments.
function Foo() {
    // ...
}

Foo.prototype.myName = function () {
    return this.name;
};

var a = new Foo();

//How do we then introspect a to find out its “ancestry” (delegation
//linkage)? The first approach embraces the “class ” confusion:
console.log(a instanceof Foo); // true
//The question instanceof answers is: in the entire[[Prototype]] chain of a,
//does the object arbitrarily pointed to by Foo.prototype ever appear

//The second, and much cleaner, approach to [[Prototype]] reflection is:
Foo.prototype.isPrototypeOf(a); // true
//The question isPrototypeOf(..) answers is: in the entire[[Prototype]] 
//chain of a, does Foo.prototype ever appear ?

// Simply: does b appear anywhere in
// c's [[Prototype]] chain?
b.isPrototypeOf(c);

//We can also directly retrieve the [[Prototype]] of an object.
Object.getPrototypeOf(a);
Object.getPrototypeOf(a) === Foo.prototype; // true

//Most browsers (not all!) have also long supported a nonstandard alternate
//way of accessing the internal[[Prototype]]:
a.__proto__ === Foo.prototype; // true

//Just as we saw earlier with .constructor, .__proto__ doesn’t actually
//exist on the object you’re inspecting. In fact, it exists on the built-in
//Object.prototype, along with the other common utilities (.to
//String(), .isPrototypeOf(..), etc.).

//Roughly, we could envision .__proto__ implemented
//for object property definitions) like this:
Object.defineProperty(Object.prototype, "__proto__", {
    get: function () {
        return Object.getPrototypeOf(this);
    },
    
    set: function (o) {
        // setPrototypeOf(..) as of ES6
        Object.setPrototypeOf(this, o);
        return o;
    }
});