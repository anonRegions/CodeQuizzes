/* Have the function DivisionStringified(num1,num2)
 * take both parameters being passed, divide num1
 * by num2, and return the result as a string with
 * properly formatted commas. If an answer is only
 * 3 digits long, return the number with no commas
 * (ie. 2 / 3 should output "1"). For example: if
 * num1 is 123456789 and num2 is 10000 the output
 * should be "12,345".  */
function DivisionStringified(num1,num2) {
    var s = Math.round(num1 / num2) + '',
        res = '';
    for (var i = s.length - 1; i >= 0; i--) {
        if (i != s.length - 1 && (s.length - i - 1) % 3 == 0) {
            res = ',' + res;
        }
        res = s[i] + res;
    }
    return res;
}
var num1 = 80000, num2 = 20;
console.log(DivisionStringified(num1,num2));