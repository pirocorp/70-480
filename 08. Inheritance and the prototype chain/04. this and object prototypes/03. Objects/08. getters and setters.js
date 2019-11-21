//When you define a property to have either a getter or a setter or both,
//its definition becomes an “accessor descriptor”
var myObject = {
    // define a getter for `a`
    //object-literal syntax with get a() { .. }
    get a() {
        return 2;
    }
};

//explicit definition with defineProperty(..)
Object.defineProperty(
    myObject, // target
    "b", // property name
    {   // descriptor
        // define a getter for `b`
        get: function(){ return this.a * 2 },

        // make sure `b` shows up as an object property
        enumerable: true
    }
);

console.log(myObject.a); // 2
console.log(myObject.b); // 4

//set operation won’t throw an error but will just 
//silently throw the assignment away
myObject.a = 3;
console.log(myObject.a); // 2

//You will almost certainly
//want to always declare both getter and setter (having only one or the
//other often leads to unexpected/surprising behavior):

var myObject2 = {
    // define a getter for `a`
    get a() {
        return this._a_;
    },

    // define a setter for `a`
    set a(val) {
        this._a_ = val * 2;
    }
};

myObject2.a = 2;
console.log(myObject2.a); // 4