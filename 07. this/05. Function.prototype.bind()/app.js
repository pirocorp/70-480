//function.bind(thisArg[, arg1[, arg2[, ...]]])
//The bind() function creates a new bound function, 
//which is an exotic function object (a term from ECMAScript 2015) 
//that wraps the original function object. Calling the bound function 
//generally results in the execution of its wrapped function.

//Creating a bound function
this.x = 9;    // this refers to global "window" object here in the browser

var module = {
    x: 81,
    getX: function() { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

//Partially applied functions
function list() {
    return Array.prototype.slice.call(arguments);
}
  
function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3

console.log(list1);
console.log(result1);

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);

// Create a function with a preset first argument.
var addThirtySeven = addArguments.bind(null, 37); 

var list2 = leadingThirtysevenList(); 
console.log(list2);// [37]

var list3 = leadingThirtysevenList(1, 2, 3); 
console.log(list3);// [37, 1, 2, 3]

var result2 = addThirtySeven(5); 
console.log(result2);// 37 + 5 = 42 

var result3 = addThirtySeven(5, 10);
console.log(result3);// 37 + 5 = 42 , second argument is ignored

//With setTimeout()
//By default within window.setTimeout(), the this keyword 
//will be set to the window (or global) object.
function LateBloomer() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function() {
    //this in declare will be bind to this in bloom
    window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
        this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  
// after 1 second, triggers the 'declare' method

//Bound functions used as constructors
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() { 
    return this.x + ',' + this.y; 
};

var p = new Point(1, 2);
var str = p.toString(); // '1,2'
console.log(str);

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

var axisPoint = new YAxisPoint(5);
var str2 = axisPoint.toString(); // '0,5'
console.log(str2);

var x1 = axisPoint instanceof Point; // true
var x2 = axisPoint instanceof YAxisPoint; // true
var x3 = new YAxisPoint(17, 42) instanceof Point; // true

console.log(x1, x2, x3);

//Creating shortcuts
