//Only the declarations themselves are hoisted (var and function)
//It’s also important to note that hoisting is per-scope.
//functions are hoisted first, and then variables.
//duplicate (and thus ignored) declarations
a = 2;
var a;
console.log(a);

console.log(b);
var b = 2; //undefined

foo();
function foo() {
    console.log(a); // undefined
    var a = 2;
}

c = 3; //ReferenceError
let c;
console.log(c); 