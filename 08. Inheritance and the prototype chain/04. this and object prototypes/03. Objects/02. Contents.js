//As mentioned earlier, the contents of an object consist of values (any
//type) stored at specifically named locations, which we call properties.

//What is stored in the container are these property names, 
//which act as pointers (technically, references) to where 
//the values are stored.

var myObject = {
    a: 2
};

//property access
myObject.a; // 2

//key access
myObject["a"]; // 2

var myObject = {};
myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";
myObject["true"]; // "foo"
myObject["3"]; // "bar"
myObject["[object Object]"]; // "baz"

var prefix = "foo";

var myObject2 = {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world"
};
myObject2["foobar"]; // hello
myObject2["foobaz"]; // world

var myObject3 = {
    [Symbol.Something]: "hello world"
};