if (
    p !== null &&
    (
        typeof p === "object" ||
        typeof p === "function"
    ) &&
    typeof p.then === "function"
) {
    // assume it's a thenable!
}
else {
    // not a thenable
}

//You can't control or predict if any other code accidentally or maliciously 
//adds then(..) to Object.prototype, Array.prototype, or any of the other 
//native prototypes. And if what's specified is a function that doesn't 
//call either of its parameters as callbacks, then any Promise resolved
//with such a value will just silently hang forever! Crazy.