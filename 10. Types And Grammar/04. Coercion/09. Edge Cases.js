var i = 2;

//these are evil tricks. Don’t do them.
Number.prototype.valueOf = function () {
    return i++;
};

var a = new Number(42);

if (a == 2 && a == 3) {
    console.log("Yep, this happened.");
}