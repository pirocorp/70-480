//Global context
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

//Function context
//Simple call
//because the value of this is not set by the call
//this will default to the global object, which is window in a browser. 
function f1() {
    return this;
}
  
// In a browser:
console.log(f1() === window);// true 

// In Node:
//f1() === global; // true

//In arrow functions, this retains the value of the enclosing lexical 
//context's this. In global code, it will be set to the global object:
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

//The same applies to arrow functions created inside other functions: 
//their this remains that of the enclosing lexical context.
// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as 
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the 
// returned function.
var obj = {
    bar: function() {
        var x = (() => this);

        return x;
    }
};

// Call bar as a method of obj, setting its this to obj
// Assign a reference to the returned function to fn
var fn = obj.bar();

// Call fn without setting this, would normally default
// to the global object or undefined in strict mode
console.log(fn() === obj); // true

// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
// Calling the arrow function's this from inside the bar method()
// will now return window, because it follows the this from fn2.
console.log(fn2()() == window); // true

//so it remains set to obj even when called in a manner that 
//would normally set its this to undefined or the global object 
console.log(obj.bar()() == obj); //true

//As an object method
var o = {
    prop: 37,

    f: function() {
        return this.prop;
    }
};
  
console.log(o.f()); // 37

var o = {prop: 37};

function independent() {
    return this.prop;
}

o.f = independent;

//This demonstrates that it matters only that the function was 
//invoked from the f member of o.
console.log(o.f()); // 37

//The fact that the object is itself a member of o has no consequence; 
//the most immediate reference is all that matters.
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42

//this on the object's prototype chain
var o = {f: function() { return this.a + this.b; }};
//The Object.create() method creates a new object, 
//using an existing object as the prototype of the newly created object.
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

//this with a getter or setter
function sum() {
    return this.a + this.b + this.c;
}
  
  var o = {
    a: 1,
    b: 2,
    c: 3,

    get average() {
        return (this.a + this.b + this.c) / 3;
    }
};
  
//The static method Object.defineProperty() defines a new property directly 
//on an object, or modifies an existing property on an object, 
//and returns the object.
Object.defineProperty(o, 'sum', {
      get: sum, enumerable: true, configurable: true});
  
console.log(o.average, o.sum); // 2, 6

//As a constructor

/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
    this.a = 37;
}
  
var o = new C();
console.log(o.a); // 37
  
  
function C2() {
    this.a = 37;
    return {a: 38};
}
  
o = new C2();
console.log(o.a); // 38

//As a DOM event handler
// When called as a listener, turns the related element blue
function bluify(e) {
    // Always true
    console.log(this === e.currentTarget);
    // true when currentTarget and target are the same object
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}
  
// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify, false);
}