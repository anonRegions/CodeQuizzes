/* Define a function called add_numbers() that adds two numbers
 * and throws an error if the arguments supplied to the function
 * are not numbers.  */
function add_numbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return ("Please enter two valid numbers");
    } else {
        return (a + b);
    }

}

console.log(add_numbers("fish", 138));