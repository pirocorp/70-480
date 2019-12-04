var p = new Promise(function (X, Y) {
    // X() for fulfillment
    // Y() for rejection
});

var fulfilledPr = Promise.resolve(42);

var rejectedPr = Promise.reject("Oops");

//-------------------------------------------------------

var rejectedPr = new Promise(function (resolve, reject) {
    // resolve this promise with a rejected promise
    resolve(Promise.reject("Oops"));
});

rejectedPr.then(
    function fulfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err);	// "Oops"
    }
);