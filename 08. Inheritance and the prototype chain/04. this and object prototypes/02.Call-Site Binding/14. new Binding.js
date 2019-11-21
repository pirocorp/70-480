//in JavaScript is. In JS, constructors are just functions 
//that happen to be called with the new operator in front of them.
//that makes that function call a constructor call.
//there’s really no such thing as “constructor functions, ” 
//but rather construction calls of functions.

//When a function is invoked with new in front of it, otherwise known
//as a constructor call, the following things are done automatically:
//1. A brand new object is created (aka constructed) out of thin air.
//2. The newly constructed object is [[Prototype]]-linked.
//3. The newly constructed object is set as the this binding for that
//function call.
//4. Unless the function returns its own alternate object, the new invoked
//function call will automatically return the newly constructed object.
function foo(a) {
    this.a = a;
}

//So new is the final way that a function call’s this can be bound.
//We’ll call this new binding.
var bar = new foo(2);
console.log(bar.a); // 2