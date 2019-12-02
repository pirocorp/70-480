// A
ajax("..", function (/*...*/) {
    // C
});
// B

// A and // B represent the first half of the program (aka the now), 
//and // C marks the second half of the program (aka the later). 
//The first half executes right away, and then there's a "pause" of 
//indeterminate length.

//In other words, the callback function wraps or encapsulates 
//the continuation of the program.

// A
setTimeout(function () {
    // C
}, 1000);
// B