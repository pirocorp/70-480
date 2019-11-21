//By combining writable:false and configurable:false, you can
//essentially create a constant
var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false
});