function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

//bind(..) returns a new function that is hardcoded to call the original
//function with the this context set as you specified.
var bar = foo.bind(obj);

var b = bar(3); // 2 3
console.log(b); // 5