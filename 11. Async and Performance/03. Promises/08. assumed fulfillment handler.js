var p = Promise.resolve(42);

p.then(
    // assumed fulfillment handler, if omitted or
    // any other non-function value passed
    // function(v) {
    //     return v;
    // }
    null,
    function rejected(err) {
        // never gets here
    }
);

//The then(null,function(err){ .. }) pattern -- only handling rejections 
//(if any) but letting fulfillments pass through -- has a shortcut in the 
//API: catch(function(err){ .. })