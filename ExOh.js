/* traverse a string and determine if there is an equal amount
 * of certain characters.  */
function ExOh(str) {
    if (str.match(/o/g) == null || str.match(/x/g) == null) {
        return false;
    } else {
        var oCount = str.match(/o/g).length;
        var xCount = str.match(/x/g).length;
        return oCount == xCount;
    }
}
var str = "xoxo";
console.log(ExOh(str));