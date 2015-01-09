// counting all the vowels in a string.
function VowelCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (/a|e|i|o|u/.test(str[i])) {
            console.log(/a|e|i|o|u/.test(str[i]));
            count += 1;
        }
    }
    return count;
}
var str = "Pacceeehhiiillnnopprssstttuy";
console.log(VowelCount(str));