//Here’s a list of the most commonly used natives:
//String()
//Number()
//Boolean()
//Array()
//Object()
//Function()
//RegExp()
//Date()
//Error()
//Symbol() —added in ES6!
var a = new String("abc");
typeof a; // "object" ... not "String"
a instanceof String; // true
Object.prototype.toString.call(a); // "[object String]"

//The result of the constructor form of value creation(new
//String("abc")) is an object wrapper around the primitive("abc")
//This object wrapper can further be observed with:
console.log(a);