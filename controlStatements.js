/* Concatenate all the elements in the following array that begin
with the letter "b" and print the resulting sentence to the console.	*/

var heaven = [34, [], "bodacious", "barbecues", "begin", "whatever",
    "by", "battering", true, "bacon"];

var bigString = 0;
for (var i = 0; i < heaven.length; i++) {
    if ((heaven[i][0]) == "b") {
        bigString += (heaven[i] + " ");
    }
}
console.log(bigString);
