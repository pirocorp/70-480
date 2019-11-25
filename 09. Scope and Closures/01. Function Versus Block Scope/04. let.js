//he let keyword attaches the variable declaration to the scope of
//whatever block(commonly a { .. } pair) it’s contained in.In other
//words, let implicitly hijacks any block’s scope for its variable declaration.
var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
}

console.log(bar); // ReferenceError

//declarations made with let will not hoist to the entire scope
//of the block they appear in.Such declarations will not observably “exist”
//in the block until the declaration statement.
{
    console.log(bar); // ReferenceError!
    let bar = 2;
}

//let loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // ReferenceError