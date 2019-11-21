//But in JS, these are actually just built -in functions.
//Each of these builtin functions can be used as a constructor
//with the result being a newly constructed object of the subtype in question.
var strPrimitive = "I am a string";
console.log(typeof strPrimitive); // "string"
console.log(strPrimitive instanceof String); // false
console.log(strPrimitive instanceof Object); // false

console.log();

var strObject = new String("I am a string");
console.log(typeof strObject); // "object"
console.log(strObject instanceof String); // true
console.log(strObject instanceof Object); // true

// inspect the object sub-type
console.log(Object.prototype.toString.call(strObject)); // [object String]

//The primitive value "I am a string" is not an object, it’s a primitive
//literal and immutable value.To perform operations on it, such as
//checking its length, accessing its individual character contents, etc., a
//String object is required.

//Luckily, the language automatically coerces a string primitive to a
//String object when necessary
var strPrimitive = "I am a string";
console.log(strPrimitive.length); // 13
console.log(strPrimitive.charAt(3)); // "m"