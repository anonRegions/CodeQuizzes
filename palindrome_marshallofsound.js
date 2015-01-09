function Palindrome(str) {
    str = str.replace(new RegExp("[^a-z]", "g"), "");
    console.log(str);
    return str == str.split("").reverse().join("");
}

var str = "A Santa lived as a devil at NASA";
console.log(Palindrome(str));