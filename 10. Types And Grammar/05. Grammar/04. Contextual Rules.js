//Curly braces
//Object literals
var a = {
    foo: bar()
};

//Here, { .. } is just a regular code block.
{
    foo: bar()
}

//Blocks
//{} appears in the + operator’s expression, and is
//therefore interpreted as an actual value(an empty object).
[] + {}; // "[object Object]"
//{} is interpreted as a standalone {} empty block
{} +[]; // 0

//Object destructuring
function getData() {
    // ..
    return {
        a: 42,
        b: "foo"
    };
}

var { a, b } = getData();

function foo({ a, b, c }) {
    // no need for:
    // var a = obj.a, b = obj.b, c = obj.c
    console.log(a, b, c);
}

foo({
    c: [1, 2, 3],
    a: 42,
    b: "foo"
}); // 42 "foo" [1, 2, 3]

//else if and optional blocks
//It’s a common misconception that JavaScript has an else if clause
if (a) {
    // ..
}
//there is no else if. But if and else statements are allowed to omit the { }
//around their attached block if they only contain a single statement
else if (b) {
    // ..
}
else {
    // ..
}

//Actually parsed to 
if (a) {
    // ..
}
else {
    if (b) {
        // ..
    }
    else {
        // ..
    }
}