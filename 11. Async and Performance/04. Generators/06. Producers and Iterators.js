var something = (function () {
    var nextVal;

    return {
        // needed for `for..of` loops
        [Symbol.iterator]: function () { return this; },

        // standard iterator interface method
        next: function () {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }

            return { done: false, value: nextVal };
        }
    };
})();

for (var v of something) {
    console.log(v);

    // don't let the loop run forever!
    if (v > 500) {
        break;
    }
}

for (
    var ret;
    (ret = something.next()) && !ret.done;
) {
    console.log(ret.value);

    // don't let the loop run forever!
    if (ret.value > 500) {
        break;
    }
}
// 1 9 33 105 321 969