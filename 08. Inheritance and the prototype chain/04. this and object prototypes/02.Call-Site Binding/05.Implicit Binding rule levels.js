function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

//Only the top/last level of an object property reference chain matters
//to the call-site.

//this binds to obj2 in foo
obj1.obj2.foo(); // 42