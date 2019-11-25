var a = 2;
(function foo() { // <-- insert this
    var a = 3;
    console.log(a); // 3
})(); // <-- and this
console.log(a); // 2

//Another variation on IIFEs that is quite common is to use the fact that
//they are, in fact, just function calls, and pass in argument

var a = 2;
(function IIFE(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2
})(window);
console.log(a); // 2