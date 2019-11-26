//Closure is when a function is able to remember and access its lexical
//scope even when that function is executing outside its lexical scope.
function foo() {
    var a = 2;

    //Function bar() has access to the variable a in the outer enclosing 
    //scope because of lexical scope look-up rules 
    //(in this case, it’s an RHS reference look-up).
    function bar() {
        console.log( a ); // 2
    }

    bar();
}

foo();

//------------------------------------------------------------------------------
function foo2() {
    var a = 2;

    function bar() {
        console.log( a );
    }

    return bar;
}

//bar() is executed, for sure. But in this case, it’s executed 
//outside of its declared lexical scope.
var baz = foo2();

baz(); // 2 -- Whoa, closure was just observed, man.

//By virtue of where it was declared, bar() has a lexical scope closure
//over that inner scope of foo(), which keeps that scope alive for bar()
//to reference at any later time.

//bar() still has a reference to that scope, and that reference is called
//closure.

//Closure lets the function continue to access the lexical scope it
//was defined in at author time.

//Of course, any of the various ways that functions can be passed
//around as values, and indeed invoked in other locations, are all 
//examples of observing/exercising closure.

//--------------------------------------------------------------------------
function foo3() {
    var a = 2;

    function baz() {
        console.log( a ); // 2
    }

    bar( baz );
}

//We pass the inner function baz over to bar, and call that inner function
//(labeled fn now), and when we do, its closure over the inner scope of
//foo() is observed by accessing a.
function bar(fn) {
    fn(); // look ma, I saw closure!
}

//---------------------------------------------------------------------------
var fn;

function foo4() {
    var a = 2;

    function baz() {
        console.log( a );
    }

    //Whatever facility we use to transport an inner function outside of 
    //its lexical scope, it will maintain a scope reference to where it was 
    //originally declared, and wherever we execute him, that closure will 
    //be exercised.
    fn = baz; // assign baz to global variable
}

function bar() {
    fn(); // look ma, I saw closure!
}

foo4();
bar(); // 2
//---------------------------------------------------------------------------
for (var i=1; i<=5; i++) {
    //The use of an IIFE inside each iteration created a new scope for each
    //iteration, which gave our timeout function callbacks the opportunity
    //to close over a new scope for each iteration
    (function(j){
        setTimeout( function timer(){
            console.log( j );
        }, j*500 );
    })( i );
}

//---------------------------------------------------------------------------
for (var i=1; i<=5; i++) {
    let j = i; // yay, block-scope for closure!
    setTimeout( function timer(){
        console.log( j );
    }, j*500 );
}
//---------------------------------------------------------------------------
for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*500 );
}

