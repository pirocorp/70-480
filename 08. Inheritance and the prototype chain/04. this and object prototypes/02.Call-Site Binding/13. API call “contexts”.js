//Many libraries’ functions, and indeed many new built-in functions in
//the JavaScript language and host environment, provide an optional
//parameter, usually called “context, ” which is designed as a workaround
//for you not having to use bind(..) to ensure your callback
//function uses a particular this.
function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach(foo, obj);
// 1 awesome 2 awesome 3 awesome

//Internally, these various functions almost certainly use explicit binding
//via call(..) or apply(..), saving you the trouble.