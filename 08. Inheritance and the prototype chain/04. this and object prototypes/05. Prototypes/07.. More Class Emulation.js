function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
};

var a = new Foo("a");
var b = new Foo("b");

console.log(a.myName()); // "a"
console.log(b.myName()); // "b"

//This snippet shows two additional “class orientation” tricks in play:
