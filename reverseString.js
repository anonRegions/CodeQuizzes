function reverseString(str) {
    /* Use split() string method to divide string into one-char arrays
     * Use reverse() array method to reverse order of chars
     * Use join() array method to concatenate chars back into string.   */
    return str.split("").reverse().join("");
}
//Assign string to var str
var str = "Argument goes here";
/*Invoke reverseString function, passing str to that function;
 * print return value to console.log    */
console.log(reverseString(str));
