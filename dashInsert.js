/* insert dashes ('-') between each two odd numbers in num.
 * For example: if num is 454793 the output should be
 * 4547-9-3. Don't count zero as an odd number.  */
function DashInsert(num) {
    //convert num to array
    var arr = num.toString(10).split('').map(Number);
    //loop thru array
    for (var i = 0; i < arr.length; i++) {
        //test whether arr[i] is odd; if so, increment i
        if (arr[i] % 2 != 0) i++;
        //test whether arr[i] is odd & not last array item
        //if so, add dash
        if (arr[i] % 2 != 0 && i < arr.length) arr.splice(i,0,'-');
        // returns [ 6, 1, '-', 7, 6, 3, 4, 5, '-', 7, 8, 9 ]
    }
    return arr.join('');
}
var num = 6176345789;
console.log(DashInsert(num));
/* When the input was 77993 your output was incorrect.
 * When the input was 60497 your output was incorrect.
 * When the input was 667488958374553 your output was incorrect.
 * This works: 6176345789
 */

