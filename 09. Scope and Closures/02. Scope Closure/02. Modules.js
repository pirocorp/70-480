//This is the pattern in JavaScript we call module. The most common
//way of implementing the module pattern is often called revealing
//module, and it’s the variation we present here.
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }

    //It’s appropriate to think of this object return value 
    //as essentially a public API for our module.
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//Modules require two key characteristics: 1) an outer wrapping function
//being invoked, to create the enclosing scope 2) the return value
//of the wrapping function must include reference to at least one inner
//function that then has closure over the private inner scope of the
//wrapper.