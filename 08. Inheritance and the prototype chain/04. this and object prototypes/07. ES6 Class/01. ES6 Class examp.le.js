//class literal syntax has no affordance for specifying properties
//(only methods).
class Widget {
    constructor(width,height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    render($where){
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo( $where );
        }
    }
}

//Button is declared directly to “inherit from” (aka extends) Widget, 
//instead of needing to use Object.create(..) to replace a 
//.prototype object that’s linked, or having to set with .__pro
//to__ or Object.setPrototypeOf(..).

//extends lets you extend even built-in object (sub)types, 
//like Array or RegExp
class Button extends Widget {
    constructor(width,height,label) {
        //super(..) now gives us a very helpful relative polymorphism 
        //capability, so that any method at one level of the chain can refer
        //relatively one level up the chain to a method of the same name.

        //super() works inside constructors exactly as you’d expect.
        super( width, height );
        this.label = label || "Default";
        this.$elem = $( "<button>" ).text( this.label );
    }

    render($where) {
        super( $where );
        this.$elem.click( this.onClick.bind( this ) );
    }

    onClick(evt) {
        console.log( "Button '" + this.label + "' clicked!" );
    }
}