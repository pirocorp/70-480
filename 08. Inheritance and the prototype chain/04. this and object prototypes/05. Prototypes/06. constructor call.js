function NothingSpecial() {
    console.log("Don't mind me!");
}

var a = new NothingSpecial();
// "Don't mind me!"

console.log(a); // {}

//In other words, in JavaScript, it’s most appropriate to say that a 
//“constructor” is any function called with the new keyword in front of it.

//Functions aren’t constructors, but function calls are “constructor calls”
//if and only if new is used.