//default binding rule applies here
//this is set to global-object (window) 
//If strict mode is in effect, the global object is not eligible for the
//default binding, so the this is instead set to undefined:
function foo() {
    console.log( this.a );
}

//variables declared in the global scope, as var a = 2 
//are synonymous with global-object properties of the same name.
var a = 2;

//foo() is called with a plain, undecorated function reference.
foo(); // 2