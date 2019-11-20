function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

//Another rule to consider is whether the call-site has a context object
//the call-site uses the obj context to reference the function,
//so you could say that the obj object “owns” or “contains” the function
//reference at the time the function is called.
//When there is a context object for a function reference, 
//the implicit binding rule says that it’s that object that should be 
//used for the function call’s this binding.

//this is bind to obj
obj.foo(); // 2