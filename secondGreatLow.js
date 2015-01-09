// Determine the second lowest and greatest numbers in an array
function SecondGreatLow(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    if (arr.length == 2) {
        var last = arr[arr.length - 1];
    } else {
        last = arr[arr.length-2];
    }

    arr.reverse();
    if (arr.length == 2) {
        var first = arr[arr.length-1];
    } else {
        first = arr[arr.length-2];
    }
    return first + " " + last;
}
var arr = [7, 7, 90, 1000003], first, last;
console.log(SecondGreatLow(arr));
/* When the input was (2,2,2,5,5,5,6) your output was incorrect.
 * When the input was (90, 23) your output was incorrect.
 * When the input was (7, 7, 90, 1000003) your output was incorrect.
 * [1,2,3,4]
 * [10,20,30,40,100]
 * [54,49,1,0,7,4]
 * [3,4,5,7]
 * [31,2,90,50,7]  */
