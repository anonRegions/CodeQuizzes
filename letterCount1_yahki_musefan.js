/* Have the function LetterCountI(str) take the str parameter being
 * passed and return the first word with the greatest number of
 * repeated letters. For example: "Today, is the greatest day ever!"
 * should return greatest because it has 2 e's (and 2 t's) and it
 * comes before ever which also has 2 e's. If there are no words
 * with repeating letters return -1. Words will be separated by
 * spaces.  */
function LetterCountI(str){
    var wordsAndLetters = {};
    var count = 0;
    var finalword;
    str = str.split(" ");
    for(var i = 0; i < str.length; i++){
        wordsAndLetters[str[i]] = wordsAndLetters[str[i]] || 0;
    }
    function countWordLetters(strs){
        strs = strs.split("");
        var lettercount = {};
        for(var i = 0; i <strs.length; i++){
            lettercount[strs[i]] = lettercount[strs[i]] || 0;
            lettercount[strs[i]]++;
        }
        return lettercount;
    }
    for(var words in wordsAndLetters){
        wordsAndLetters[words] = countWordLetters(words);
        var highestLetterFrequency = wordsAndLetters[words];
        for(var values in highestLetterFrequency){
            if(highestLetterFrequency[values] > count){
                count = highestLetterFrequency[values];
                finalword = words;
            }
            if(count !== 1){
                return finalword;
            }
        }
    }
    return -1;
}
LetterCountI("today is the greatest day ever!");