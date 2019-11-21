function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

//Invoking foo with explicit binding by foo.call(..) 
//allows us to force its this to be obj.
foo.call(obj); // 2

//!NB If you pass a simple primitive value the primitive 
//value is wrapped in its object. This is often referred to as “boxing.”