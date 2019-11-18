class Test {
    constructor() {

    }
}

let x = new Test()
x.a = 5;
console.log(x);

console.log(x instanceof Test);
console.log(x instanceof Object);

console.log(x instanceof Function);


console.log(Test instanceof Function);
console.log(Function instanceof Object);

let y = Object.create(x);
console.log(y);
console.log(y instanceof Test);
console.log(y.a);