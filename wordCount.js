// determine how many words a sentence contains
function WordCount(str) {
    return (str.match(/\b\w+\W*\b/g)).length;
}
var str = "letter sz!23 z";
console.log(WordCount(str));

// "Hello World"
//"Never eat shredded wheat"
//"letter sz!23 z"