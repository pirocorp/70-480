var myObject = {
    a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a");
// {
    // value: 2,
    //The ability for you to change the value of a property is 
    //controlled by writable.
    // writable: true,

    //property will show up in certain object-property enumerations,
    //such as the for..in loop
    // enumerable: true,

    //The ability for you to change the descriptor definition of a property.
    // configurable: true
// }