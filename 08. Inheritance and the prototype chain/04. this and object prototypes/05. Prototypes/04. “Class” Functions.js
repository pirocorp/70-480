function Foo() {
    // ...
}
console.log(Foo.prototype);// { }

//prototypal Delegation
var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true