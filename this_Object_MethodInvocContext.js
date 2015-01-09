/* Demonstrate that the this keyword refers to the object
 * itself for functions that are invoked in the method
 * invocation context.  */
var testObject = {
    blahBlah: function() {
        return this === testObject;
    }
};

console.log(testObject.blahBlah());