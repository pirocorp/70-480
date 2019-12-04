var p = new Promise(function (resolve, reject) {
    reject("Oops");
});

var p2 = p.then(
    function fulfilled() {
        // never gets here
    }
    
    // assumed rejection handler, if omitted or
    // any other non-function value passed
    // function(err) {
    //     throw err;
    // }
);