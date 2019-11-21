//Technically, functions never “belong” to objects
//Every time you access a property on an object, that is a property access,
//regardless of the type of value you get back.

function foo() {
    console.log("foo");
}
var someFoo = foo; // variable reference to `foo`
var myObject = {
    someFoo: foo
};

foo(); // function foo(){..}
someFoo(); // function foo(){..}
myObject.someFoo(); // function foo(){..}

var myObject = {
    foo: function () {
        console.log("foo");
    }
};

var someFoo = myObject.foo;
someFoo(); // function foo(){..}
myObject.foo(); // function foo(){..}