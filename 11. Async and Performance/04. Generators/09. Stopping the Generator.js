//"Abnormal completion"(i.e., "early termination") of the for..of loop-- 
//generally caused by a break, return, or an uncaught exception-- sends 
//a signal to the generator's iterator for it to terminate.

//While a for..of loop will automatically send this signal, 
//you may wish to send the signal manually to an iterator; 
//you do this by calling return(..).

//If you specify a try..finally clause inside the generator, it will 
//always be run even when the generator is externally completed. 
//This is useful if you need to clean up resources 
//(database connections, etc.):
function *something() {
    try {
        var nextVal;

        while (true) {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }

            yield nextVal;
        }
    }
    // cleanup clause
    finally {
        console.log("cleaning up!");
    }
}

var it = something();
for (var v of it) {
    console.log(v);

    // don't let the loop run forever!
    if (v > 500) {
        console.log(
            // complete the generator's iterator
            //When we call it.return(..), it immediately terminates the 
            //generator, which of course runs the finally clause.

            //Also, it sets the returned value to whatever you passed in to 
            //return(..), which is how "Hello World" comes right back out.

            //We also don't need to include a break now because the generator's 
            //iterator is set to done:true, so the for..of loop will terminate 
            //on its next iteration.
            it.return("Hello World").value
        );
        // no `break` needed here
    }
}
// 1 9 33 105 321 969
// cleaning up!
// Hello World