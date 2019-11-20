//the global object is only eligible
//for the default binding if the contents of foo() 
//are not running in strict mode; 
function foo() {
    console.log( this.a );
}

var a = 5;

(function(){
    //the strict mode state of the call-site of foo() 
    //is irrelevant
    "use strict";
    foo(); // 5
})();