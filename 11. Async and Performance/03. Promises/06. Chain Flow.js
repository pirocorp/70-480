//Every time you call then(..) on a Promise, it creates and returns a 
//new Promise, which we can chain with.
//Whatever value you return from the then(..) call's fulfillment callback
//is automatically set as the fulfillment of the chained Promise
function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(100) // step 1
    .then(function STEP2() {
        console.log("step 2 (after 100ms)");
        return delay(200);
    })
    .then(function STEP3() {
        console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
        console.log("step 4 (next Job)");
        return delay(1000);
    })
    .then(function STEP5() {
        console.log("step 5 (after another 1000ms)");
    })

//intrinsic behaviors of Promises that enable chaining flow control:
//A then(..) call against one Promise automatically produces 
//a new Promise to return from the call.

//Inside the fulfillment/rejection handlers, if you return a value or an 
//exception is thrown, the new returned (chainable) Promise is resolved 
//accordingly.

//If the fulfillment or rejection handler returns a Promise, it is unwrapped, 
//so that whatever its resolution is will become the resolution of the chained 
//Promise returned from the current then(..)