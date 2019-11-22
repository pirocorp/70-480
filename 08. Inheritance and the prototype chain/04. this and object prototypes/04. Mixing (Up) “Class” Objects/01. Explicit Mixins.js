//Since JavaScript will not automatically copy behavior 
//from Parent to Child class like OOP languages
//we can instead create a utility that manually copies.
//Such a utility is often called extend(..) by many libraries/frameworks,
//but we will call it mixin(..) here for illustrative purposes:
// vastly simplified `mixin(..)` example:
function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        // only copy if not already present
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }

    return targetObj;
};

var Vehicle = {
    engines: 1,

    ignition: function () {
        console.log("Turning on my engine.");
    },

    drive: function () {
        this.ignition();
        console.log("Steering and moving forward!");
    }
};

//Car now has a copy of the properties and functions from Vehicle.
//Technically, functions are not actually duplicated, but rather 
//references to the functions are copied.
var Car = mixin(Vehicle, {
    wheels: 4,

    //Car already had a drive property (function), so that 
    //property reference was not overridden
    drive: function () {
        //explicit pseudo polymorphism
        //But if we said Vehicle.drive(), the this binding for that function
        //call would be the Vehicle object instead of the Car object
        //So, instead we use .call( this ) to ensure that drive() 
        //is executed in the context of the Car object.
        Vehicle.drive.call(this);
        console.log(
            "Rolling on all " + this.wheels + " wheels!"
        );
    }
});

//Explicit pseudo polymorphism should be avoided wherever possible