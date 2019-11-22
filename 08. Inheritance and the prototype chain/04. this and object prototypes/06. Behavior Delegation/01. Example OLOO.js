//OLOO (objects linked to other objects).
Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); }
};

// make `XYZ` delegate to `Task`
XYZ = Object.create( Task );

XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
};

XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
};

//Both the id and label data members are data properties directly on XYZ

//In general, with [[Prototype]] delegation, you want state to be on
//the delegators (XYZ, ABC), not on the delegate (Task).

//With the class design pattern, we intentionally named output
//Task the same on both parent (Task) and child (XYZ), so that we
//could take advantage of overriding (polymorphism). In behavior
//delegation, we do the opposite: we avoid if at all possible naming
//things the same at different levels of the [[Prototype]] chain
//called shadowing

//this.setID(ID); inside of a method on the XYZ object first looks
//on XYZ for setID(..), but since it doesn’t find a method of that
//name on XYZ, [[Prototype]] delegation means it can follow the
//link to Task to look for setID(..), which it of course finds.
//because of implicit call-site this binding rules, when 
//setID(..) runs, even though the method was found
//on Task, the this binding for that function call is XYZ, exactly as
//we’d expect and want.