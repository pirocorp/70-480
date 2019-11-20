function foo() {
    console.log( this.a );
};

//fn -> callback
function doFoo(fn) {
    // `fn` is just another reference to `foo`
    fn(); // <-- call-site!
};

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object

//Parameter passing is just an implicit assignment, and since we’re passing
//a function, it’s an implicit reference assignment
doFoo( obj.foo ); // "oops, global"