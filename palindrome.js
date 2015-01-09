// Determine if a string is written the same way forward and backwards
function Palindrome(str) {
    str = str.toLowerCase().split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            str.splice(i, 1);
            i--;
        }
    }
    return str.join('') == str.reverse().join('');
}
var str = "A Santa lived as a devil at NASA";
console.log(Palindrome(str));