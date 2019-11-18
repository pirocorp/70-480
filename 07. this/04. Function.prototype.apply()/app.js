//function.apply(thisArg, [argsArray])
//Using apply to append an array to another
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//Using apply and built-in functions
// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers); 
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

var min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
//max = -Infinity, min = +Infinity;

/* for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }

    if (numbers[i] < min) {
        min = numbers[i];
    }
} */

console.log(min, max); //2 7

//Using apply to chain constructors
Function.prototype.construct = function(aArgs) {
    var oNew = Object.create(this.prototype);
    //this will call MyConstructor with this = oNew and arguments = aArgs
    this.apply(oNew, aArgs);
    return oNew;
};

function MyConstructor() {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

var myArray = [4, 'Hello world!', false];
//It will call construct with this = MyConstructor
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'