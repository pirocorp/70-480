function foo() {
    //Arrow-functions provide an alternative to using bind(..)
    setTimeout(() => {
        // `this` here is lexically inherited from `foo()`
        console.log(this.a);
    }, 100);
}

var obj = {
    a: 2
};

foo.call(obj); // 2


//Pre-ES6
function foo() {
    var self = this; // lexical capture of `this`
    setTimeout(function () {
        console.log(self.a);
    }, 100);
}

var obj = {
    a: 2
};

foo.call(obj); // 2