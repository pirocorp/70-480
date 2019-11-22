//Objects in JavaScript have an internal property, denoted in the 
//specification as[[Prototype]], which is simply a reference to another object.
var myObject = {
    a: 2
};

myObject.a; // 2

var anotherObject = {
    a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);
myObject.a; // 2

for (var k in myObject) {
    console.log("found: " + k);
}

// found: a
("a" in myObject); // true

//The top end of every normal [[Prototype]] chain is the built-in
//Object.prototype.