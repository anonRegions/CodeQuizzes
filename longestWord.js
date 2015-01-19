// Created by Ethan on 11/18/2014.
function longestWord(sen) {
    // Divide string into individual words, copying each to array
    var str = sen.split(' ');
    var longest = 0;
    var word = null;
    //Loop through array of words
    for (var i = 0; i < str.length; i++) {
        // If all chars in each word are letters
        var alphaChars = "";
        for (var j = 0; j < str[i].length; j++) {
            if (/[a-zA-Z]/.test(str[i][j])) {
                alphaChars += str[i][j];
            }
            // If length of word i > length of longest, assign word i to var longest
            if (longest < alphaChars.length) {
                longest = alphaChars.length;
                word = alphaChars;
            }
        }
    }
    return word;
}

var sen = "How long is this, anyway?";
console.log(longestWord(sen));
