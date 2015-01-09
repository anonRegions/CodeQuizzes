/* determine if two characters are separated a specific way in the string.
 * return the string true if the characters a and b are separated by
 * exactly 3 places anywhere in the string at least once (ie.
 * "lane borrowed" would result in true because there is exactly three
 * characters between a and b)   */
function ABCheck(str) {
    str = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (/a/.test(str[i])) {
            var aIndex = i;
        }
        if (/b/.test(str[i])) {
            var bIndex = i;
        }
    }
    return (bIndex - aIndex == 4);
}
var str = "lane borrowed";
console.log(ABCheck(str));

/* str = "after it"
 "lane borrowed"
"aaaaddddd"
"123advb"
 */