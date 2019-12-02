function onlyOne(a, b, c) {
    return !!((a && !b && !c) ||
              (!a && b && !c) || 
              (!a && !b && c));
}

var a = true;
var b = false;

onlyOne(a, b, b); // true
onlyOne(b, a, b); // true
onlyOne(a, b, a); // false

//Another way Implicit Coercion
function onlyOneUpgrade() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        // skip falsy values. same as treating
        // them as 0's, but avoids NaN's.
        if (arguments[i]) {
            sum += arguments[i];
        }
    }

    return sum == 1;
}

onlyOneUpgrade(b, a); // true
onlyOneUpgrade(b, a, b, b, b); // true
onlyOneUpgrade(b, b); // false
onlyOneUpgrade(b, a, b, b, b, a); // false

//Explicit Coercion
function onlyOneExplicit() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        //use !!arguments[i] to force the coercion of the value to true or false.
        sum += Number(!!arguments[i]);
    }
    return sum === 1;
}