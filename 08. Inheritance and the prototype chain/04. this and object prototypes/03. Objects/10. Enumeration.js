var myObject = { };

Object.defineProperty(
    myObject,
    "a",
    // make `a` enumerable, as normal
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject,
    "b",
    // make `b` NON-enumerable
    { enumerable: false, value: 3 }
);

console.log(myObject.b); // 3
console.log(("b" in myObject)); // true
console.log(myObject.hasOwnProperty( "b" )); // true

//You’ll notice that myObject.b in fact exists and has an accessible value,
//but it doesn’t show up in a for..in loop
for (var k in myObject) {
    console.log( k, myObject[k] );
}
// "a" 2

//propertyIsEnumerable(..) tests whether the given property name
//exists directly on the object and is also enumerable:true.
myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false

//Object.keys(..) returns an array of all enumerable properties
Object.keys( myObject ); // ["a"]

//Object.getOwnPropertyNames(..) returns an array of all
//properties, enumerable or not
Object.getOwnPropertyNames( myObject ); // ["a", "b"]