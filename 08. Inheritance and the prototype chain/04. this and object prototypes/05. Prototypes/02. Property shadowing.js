var myObject = {
    a: 2
};

//If the myObject object already has a normal data accessor property
//called foo directly present on it, the assignment is as 
//simple as changing the value of the existing property.

//If foo is not already present directly on myObject, the[[Prototype]]
//chain is traversed, just like for the[[Get]] operation.If foo is
//not found anywhere in the chain, the property foo is added directly
//to myObject with the specified value, as expected.

myObject.foo = "bar";


//foo is not already on myObject directly directly, but
//is at a higher level of myObject’s[[Prototype]] chain

//If a normal data accessor property named foo is
//found anywhere higher on the[[Prototype]] chain, and it’s not
//marked as read - only(writable: false), then a new property
//called foo is added directly to myObject, resulting in a shadowed
//property.

//If a foo is found higher on the [[Prototype]] chain, but it’s
//marked as read - only(writable: false), then both the setting of
//that existing property as well as the creation of the shadowed
//property on myObject are disallowed.If the code is running in
//strict mode, an error will be thrown.Otherwise, the setting of
//the property value will silently be ignored.Either way, 
//no shadowing occurs.

//If a foo is found higher on the[[Prototype]] chain and it’s a
//setter, then the setter will always be called.No foo
//will be added to(aka shadowed on) myObject, nor will the foo
//setter be redefined.

//Shadowing methods leads to ugly explicit pseudo polymorphism