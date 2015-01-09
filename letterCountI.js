/* Take str parameter, return first word with greatest number of
 * repeated letters. If there are no words with repeating
 * letters return -1. Words will be separated by spaces.  */
function letterCount(str) {
    var strArr = str.split(' '), modeWord = 0, result = -1;
    if (strArr.length == null) return result;
    // traverse array of words from split()
    for (var i = 0; i < strArr.length; i++) {
        // assign value of current char element to var word
        var word = strArr[i];
        var modalChar = charRepeats(word);
        if (modalChar > modeWord) {
            modeWord = modalChar;
            result = word;
        }
    }
    return result;
}

function charRepeats(str) {
    //get each letter count for the word
    var words = {};
    for (var i = 0; i < str.length; i++) {
        //pass current char to var char
        var char = str[i];
        //if not exists, assign words[char] to words;
        //else add 1 to value of words[char]
        words[char] = (words[char] || 0) + 1;
    }
    //get largest number for char counts
    var charMax = 0;
    //loop through words
    for (var c in words) {
        /*if value at words[c] > charMax,
        assign words[c] value to charMax  */
        if (words[c] > charMax) {
            charMax = words[c];
        }
    }
    return charMax;
}
var str = "a bat cat rat";
console.log(letterCount(str));
//delete accomplish aardvark
//Today is the greatest day ever!
//the dog and cat
//a bat cat rat