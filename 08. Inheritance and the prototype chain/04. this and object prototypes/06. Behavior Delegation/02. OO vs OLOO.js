//OLOO objects linked to other objects
//OO object oriented

//classical (“prototypal”) OO style
function Foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return "I am " + this.me;
};

function Bar(who) {
    Foo.call( this, who );
}

//Parent class Foo is inherited by child class Bar
Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};

//Bar is instantiated twice as b1 and b2

//What we have is b1 delegating to Bar.prototype, 
//which delegates to Foo.prototype.
var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();

//--------------------------------------------------------------------------

//OLOO-style code:
Foo = {
    init: function(who) {
        this.me = who;
    },

    identify: function() {
        return "I am " + this.me;
    }
};

//Bar delegates to Foo
Bar = Object.create( Foo );

Bar.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};

//b1 delegates to Bar it delegates to Foo
var b1 = Object.create( Bar );
//this in Foo.init will be b1
b1.init( "b1" );

var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();

//In Object starting with Capital letter we store only functionality
//(Act somewhat like class)
//In Objects starting with small letter we store state
//(Act somewhat like instances)