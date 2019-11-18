//function.call(thisArg, arg1, arg2, ...)

//Using call to chain constructors for an object
function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
  
function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
  
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

//Using call to invoke an anonymous function
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];
  
for (var i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }

        this.print();

    }).call(animals[i], i);
}

//Using call to invoke a function and specifying the context for 'this'
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
  
var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
};
  
greet.call(obj);  // cats typically sleep between 12 and 16 hours

//Using call to invoke a function and without specifying the first argument
//In the example below, we invoke the display function without passing the 
//first argument. If the first argument is not passed, the value of this is 
//bound to the global object.
var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen