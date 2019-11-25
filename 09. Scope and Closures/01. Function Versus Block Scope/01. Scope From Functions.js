//The most common answer to those questions is that JavaScript has
//function-based scope.That is, each function you declare creates a
//bubble for itself, but no other structures create their own scope bubbles.
//As we’ll see in just a little bit, this is not quite true.
function foo(a) {
    var b = 2;

    // some code

    //bar(..) has its own scope bubble.
    function bar() {
        // ...
    }

    // more code

    var c = 3;
}

//In this snippet, the scope bubble for foo(..) includes identifiers a, b,
//c, and bar.It doesn’t matter where in the scope a declaration appears,
//the variable or function belongs to the containing scope bubble, regardless.

//So does the global scope, which has just one identifier attached to it: foo.