function LetterCountI(str) {
    var result = -1, largestCount = 1;
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // pass word to GetWordRepeatCount, return max char count to repeat
        var repeat = GetWordRepeatCount(word);
        if (repeat > largestCount) {
            largestCount = repeat;
            result = word;
        }
    }
    return result;
}
// word is passed to function
function GetWordRepeatCount(str) {
    //get each letter count for the word
    var counts = {};
    for (var i = 0; i < str.length; i++) {
        //pass current char to var char
        var char = str[i];
        //if not exists, assign counts[char] to counts;
        //else add 1 to value of counts[char]
        counts[char] = (counts[char] || 0) + 1;
    }
    //get the largest number for the letter counts
    var max = 0;
    for (var c in counts) {
        //if value at counts[c] > max, assign counts[c] value to max
        if (counts[c] > max) max = counts[c];
    }
    return max;
}

console.log(LetterCountI("Hello there"));
console.log(LetterCountI("No words"));
console.log(LetterCountI("How about these words?"));