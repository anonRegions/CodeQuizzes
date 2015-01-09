function Palindrome(str) {
    str = str.replace(/[^a-z]/gi, '');
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length-(i+1)]) return false;
    }
    return true;

}

var str = "A Santa lived as a devil at NASA";
console.log(Palindrome(str));