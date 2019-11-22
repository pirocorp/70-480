var anotherObject = {
    a: 2
};

var myObject = Object.create(anotherObject);

anotherObject.a; // 2
myObject.a; // 2

anotherObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("a"); // false

myObject.a++; // oops, implicit shadowing!

anotherObject.a; // 2
myObject.a; // 3

myObject.hasOwnProperty("a"); // true

//Be very careful when dealing with delegated properties that you modify.
//If you wanted to increment anotherObject.a, the only proper way
//is anotherObject.a++.