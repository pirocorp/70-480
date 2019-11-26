//Values that are typeof of "object" (such as an array) are additionally
//tagged with an internal[[Class]] property(think of this more
//as an internal classification rather than related to classes from traditional
//class- oriented coding). This property cannot be accessed
//directly, but can generally can be revealed indirectly by borrowing
//the default Object.prototype.toString(..) method called against
//the value.For example:
console.log(Object.prototype.toString.call([1, 2, 3]));
// "[object Array]"

console.log(Object.prototype.toString.call(/regex-literal/i));
// "[object RegExp]"

console.log(Object.prototype.toString.call(null));
// "[object Null]"

console.log(Object.prototype.toString.call(undefined));
// "[object Undefined]"

console.log(Object.prototype.toString.call("abc"));
// "[object String]"

console.log(Object.prototype.toString.call(42));
// "[object Number]"

console.log(Object.prototype.toString.call(true));
// "[object Boolean]"

//Primitive values don’t have properties or methods, so to access.length
//or.toString() you need an object wrapper around the value.
//JS will automatically box (aka wrap) the primitive value
//to fulfill such accesses:
var a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"