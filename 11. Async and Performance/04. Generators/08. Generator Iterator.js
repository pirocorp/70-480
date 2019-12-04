function *something() {
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

//Why couldn't we say for (var v of something) ..? Because something 
//here is a generator, which is not an iterable. We have to call something() 
//to construct a producer for the for..of loop to iterate over.

//The something() call produces an iterator, but the for..of loop wants an 
//iterable, right? Yep. The generator's iterator also has a Symbol.iterator 
//function on it, which basically does a return this, just like the something 
//iterable we defined earlier. In other words, a generator's iterator is 
//also an iterable!

for (var v of something()) {
    console.log(v);

    // don't let the loop run forever!
    if (v > 500) {
        break;
    }
}
// 1 9 33 105 321 969