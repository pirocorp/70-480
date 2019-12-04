add(fetchX(), fetchY())
    .then(
        // fulfillment handler
        function (sum) {
            console.log(sum);
        },
        
        // rejection handler
        function (err) {
            console.error(err); // bummer!
        }
    );

//If something went wrong getting X or Y, or something somehow failed 
//during the addition, the promise that add(..) returns is rejected, 
//and the second callback error handler passed to then(..) will receive 
//the rejection value from the promise.