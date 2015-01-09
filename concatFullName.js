/* Create an anonymous function and assign it to the variable
full_name. The function should take two arguments, first_name
and last_name, and return the two strings concatenated. */

var full_name = function(first_name, last_name) {
    return (first_name + " " + last_name);
};

console.log(full_name("Ethan", "Rips"));