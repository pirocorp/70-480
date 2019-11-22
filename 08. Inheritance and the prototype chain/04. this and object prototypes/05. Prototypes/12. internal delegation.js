var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};

var myObject = Object.create(anotherObject);

myObject.doCool = function () {
    //delegation will tend to be less surprising/confusing if
    //it’s an internal implementation
    this.cool(); // internal delegation!
};

myObject.doCool(); // "cool!"