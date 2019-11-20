//One of the most common frustrations that this binding 
//creates is when an implicitly bound function loses that 
//binding, which usually means it falls back to the 
//default binding of either the global object or
//undefined, depending on strict mode.

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

//Even though bar appears to be a reference to obj.foo, 
//in fact, it’s really just another reference to foo itself.
var bar = obj.foo; // function reference/alias!
var a = "oops, global"; // `a` also property on global object

//Implicitly lost
//the call-site is a plain, undecorated call,
//and thus the default binding applies.
bar(); // "oops, global"