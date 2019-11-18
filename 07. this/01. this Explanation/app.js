//First Purpose Of this Keyword
//Let’s take a look at the original idea behind this keyword:
function Cat() {
    this.name = "felix";

    console.log(this); // Cat {name: "felix"}
};

let cat = new Cat(); // Cat {name: "felix"}

//The same goes for class keyword
class Mouse {
    constructor() {
        this.name = "mappy";
        console.log(this); // Mouse {name: "mappy"}
    }
};

let mouse = new Mouse(); // Mouse{name: "mappy"}

//----------------------------------------------------------------------------------------------------

//The Secondary Purpose Of this Keyword
//When used outside of object instances (previous examples) 
//the this keyword takes on a completely new meaning.

//Sometimes a function is just a function:
function abc() {
    console.log(this);
};

//called from the global scope -> that object
abc(); // [object Window] -- points to window object

//when you want to use the function as a constructor of an object,
//this keyword magically changes its context to itself 
//(no longer [object Window]):
let type = new abc(); // abc{} -- self

function food(kind) {
    this.kind = kind; //[object Object]
    this.cook = cook; //[object Object]

    //The problem with all callbacks inside functions is that they don’t 
    //link this keyword to the object from which they are called.
    function cook(sec) {
        setTimeout(function() {
            //this -> [object Window] in Browser [object Timeout] in NodeJS
            console.log(this.kind + " cooked for " + sec + " seconds.");
        }, sec * 1000);
    };
};

let soup = new food("soup"); // <--- this.kind = "soup"

//When we called setTimeout function, it disconnected us from this 
//keyword of the object. In callback of setTimeout this points to 
//[object Window] and not the original food object aka [object Object].
soup.cook(2); // undefined cooked for 2 seconds. -> windows.kind = undefined

//Fix
function foodFix(kind) {
    this.kind = kind;
    this.cook = cook; 

    //The problem with all callbacks inside functions is that they don’t 
    //link this keyword to the object from which they are called.
    function cook(sec) {
        // remember, in cook(), this still points to food object
        // and not the window object (like in setTimeout)!
        // this means we can still capture it here, and pass it
        // into setTimeout callback manually, so let's make a
        // reference to this and call it that. (or anything you want)
        let that = this; 

        //Now inside setTimeout, refer to that.kind not this.kind:
        //Remember functions created using function keyword absorb all 
        //variables from the outside environment.
        setTimeout(function() {
            console.log(that.kind + " cooked for " + sec + " seconds.");
        }, sec * 1000);
    }
}

let soup2 = new foodFix("soup");
soup2.cook(2); // soup cooked for 2 seconds.

//------------------------------------------------------------------------
//Arrow Functions To The Rescue
//Before arrow functions, programmers had to bind this to that manually.
//Previous example
//But arrow functions can automatically fix this problem. 
function foodFixES6(kind) {
    this.kind = kind;
    this.cook = cook;

    function cook(sec) {
        //Arrow functions have a “transparent” scope.
        //this keyword points to whatever is outside of it
        setTimeout(() => {
            console.log(this.kind + " cooked for " + sec + " seconds. ES6");
        }, sec * 1000);
    }
};

let soup3 = new foodFixES6("soup");
soup3.cook(2); // soup cooked for 2 seconds.

//It all starts to make more sense if we recognize that context is 
//also an instance of an object! Just not necessarily the one 
//belonging to the scope we’re in. It is more like a link to the 
//outside world. And the outside world is — roughly — the place 
//from which the function was called.
