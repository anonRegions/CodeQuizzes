// Matt Larsh version
function SecondGreatLow(arr) {
    /* Negative look-ahead: x(?!y) the negated version of the
     * previous construct: x must not be followed by y.    */
    var unique = arr.join(' ').match(/(\b\d+\b)(?!.+\b\1\b)/g);
    unique.sort(function(a,b){return a-b});
    if(unique.length == 1){
        return unique[0] + ' ' + unique[0];
    }
    return unique[1] + ' ' + unique[unique.length -2];
}
var arr = [4,90], first, last;
console.log(SecondGreatLow(arr));
/* When the input was (2,2,2,5,5,5,6) your output was incorrect.
 * When the input was (90, 23) your output was incorrect.
 * When the input was (7, 7, 90, 1000003) your output was incorrect.
 * [1,2,3,4]
 * [10,20,30,40,100]
 * [54,49,1,0,7,4]
 * [3,4,5,7]
 * [31,2,90,50,7]  */

