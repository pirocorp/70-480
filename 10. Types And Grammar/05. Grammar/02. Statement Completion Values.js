//It’s a fairly little known fact that statements all have completion values
//(even if that value is just undefined).

var a, b;
a = eval("if (true) { b = 4 + 38; }");
console.log(a); // 42