//Implicit mixins are closely related to explicit pseudo polymorphism,
//as explained previously.As such, they come with the same 
//caveats and warnings.
var Something = {
    cool: function () {
        this.greeting = "Hello World";
        this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1

var Another = {
    cool: function () {
        //implicit mixin of `Something` to `Another`
        //we essentially “borrow” the function Something.cool() 
        //and call it in the context of Another
        Something.cool.call(this);
    }
};

Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1 (not shared state with `Something`)

//Generally, avoid such constructs wherever possible to 
//keep cleaner and more maintainable code.