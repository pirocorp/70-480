var myObject = {
    a: 2
};

//The in operator will check to see if the property is in the object, or if
//it exists at any higher level of the [[Prototype]] chain object traversal
console.log(("a" in myObject)); // true
console.log(("b" in myObject)); // false

//By contrast, hasOwnProperty(..) checks to see if only
//myObject has the property or not, and will not consult the 
//[[Prototype]] chain.
console.log(myObject.hasOwnProperty( "a" )); // true
console.log(myObject.hasOwnProperty( "b" )); // false


//hasOwnProperty(..) is accessible for all normal objects via delegation
//to Object.prototype. But it’s possible to create an
//object that does not link to Object.prototype (via Object.create(null)). 
//In this case, a method call like myObject.hasOwnProperty(..) would fail.

//In that scenario, a more robust way of performing such a check is
Object.prototype.hasOwnProperty.call(myObject,"a")