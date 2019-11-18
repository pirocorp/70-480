//Objects created with syntax constructs
var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype 
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
    return 2;
}
  
// Functions inherit from Function.prototype 
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

//With a constructor
//A "constructor" in JavaScript is "just" a function that happens to be 
//called with the new operator.

function Graph() {
    this.vertices = [];
    this.edges = [];
}

//prototype of Object
Graph.prototype = {
    addVertex: function(v) {
        this.vertices.push(v);
    }
};

var g = new Graph();
// g ---> Object.prototype ---> null
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

//With Object.create
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null

console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype


//Delete Operator with Object.create and new operator
a = {a: 1};

b = Object.create(a); 
// b ---> a ---> Object.prototype ---> null

console.log(a.a); // print 1 
console.log(b.a);// print 1
b.a=5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1(b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;
console.log(a.a); // print undefined
console.log(b.a); //print undefined

function Graph() {
    this.vertices = [4,4];
}

var g = new Graph();
console.log(g.vertices); // Print [4,4]
g.vertices = 25
console.log(g.vertices);// Print 25
delete g.vertices
console.log(g.vertices)// Print undefined


//With the class keyword
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    get area() {
        return this.height * this.width;
    }

    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);

//Performance
//The lookup time for properties that are high up on the prototype chain can 
//have a negative impact on the performance
//trying to access nonexistent properties will always traverse the full prototype chain.

//To check whether an object has a property defined on itself and not somewhere on its prototype chain
g = new Graph();

console.log(g.hasOwnProperty('vertices'));
// true

console.log(g.hasOwnProperty('nope'));
// false

console.log(g.hasOwnProperty('addVertex'));
// false

console.log(g.__proto__.hasOwnProperty('addVertex'));
// true

//Bad practice: Extension of native prototypes

//prototype and Object.getPrototypeOf
