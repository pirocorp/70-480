var foo = {
    something: function () {
        console.log("Tell me something good...");
    }
};

var bar = Object.create(foo);

bar.something(); // Tell me something good...

//Object.create(..) creates a new object(bar) linked to the object we
//specified(foo), which gives us all the power(delegation) of the[[Prototype]] 
//mechanism, but without any of the unnecessary complication
//of new functions acting as classes and constructor calls

//Object.create(null) creates an object that has an empty 
//(aka null)[[Prototype]] linkage These special empty-
//[[Prototype]] objects are often called “dictionaries, ”

//We don’t need classes to create meaningful relationships between two
//objects.The only thing we should really care about is objects linked
//together for delegation