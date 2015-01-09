// For this challenge you will be capitalizing certain characters in a string.
function LetterCapitalize(str) {
    // Separate string into array of individual words
    var words = str.split(' ');
    //loop through array
    for (var i = 0; i < words.length; i++) {
        // Find first char in each word & capitalize it
        var firstLetter = words[i].charAt(0).toUpperCase();
        //concatenate each initial cap + rest of each string, assign to each word
        words[i] = firstLetter + words[i].substr(1);
    }
    //result is passed to replace() function, returning result to original call
    return words.join(" ");
}
var str = 'zsa zsa gabor';
console.log(LetterCapitalize(str));