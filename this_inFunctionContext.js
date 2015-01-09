/* Demonstrate that the this keyword equals the global object
 * for functions that are invoked with function invocation
 * context.  */
function globalContext() {
    if (this === Object.prototype) {
        return "This is the global object in a function invocation context."
    }
}

//console.log(this);
console.log(globalContext());