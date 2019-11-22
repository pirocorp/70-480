//Classes are a design pattern.

//Classes mean copies.

//When traditional classes are instantiated, a copy of behavior from class
//to instance occurs. When classes are inherited, a copy of behavior from
//parent to child also occurs.

//Polymorphism(having different functions at multiple levels of an 
//inheritance chain with the same name) may seem like it implies a 
//referential relative link from child back to parent, but it’s still 
//just a result of copy behavior.

//JavaScript does not automatically create copies (as classes imply) 
//between objects.

//The mixin pattern (both explicit and implicit) is often used to sort of
//emulate class copy behavior, but this usually leads to ugly and brittle
//syntax like explicit pseudo polymorphism (OtherObj.method
//Name.call(this, ...)), which often results in code that is harder to
//understand and maintain.

//Explicit mixins are also not exactly the same as class-copy behavior,
//since objects (and functions!) only have shared references duplicated.

//In general, faking classes in JS often sets more landmines for future
//coding than solving present real problems.