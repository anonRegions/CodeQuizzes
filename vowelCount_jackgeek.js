function VowelCount(str) {
    var vowels = str.match(/[aeiou]/gi);
    return (vowels === null) ? 0 : vowels.length;

}
var str = "Webstorm";
console.log(VowelCount(str));