//Now, we can summarize the rules for determining this from a function
//call’s call - site, in their order of precedence.Ask these questions
//in this order, and stop when the first rule applies.

//1. Is the function called with new (new binding) ? If so, this is the
//newly constructed object.
var bar = new foo()

//2. Is the function called with call or apply (explicit binding), even
//hidden inside a bind hard binding ? If so, this is the explicitly
//specified object.
var bar = foo.call(obj2)

//3. Is the function called with a context(implicit binding), otherwise
//known as an owning or containing object ? If so, this is that context
//object.
var bar = obj1.foo()

//4. Otherwise, default the this (default binding). If in strict mode,
//pick undefined, otherwise pick the global object.
var bar = foo()