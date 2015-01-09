function LetterChanges(str) {
    return str.replace(/[a-z]/ig,function(c){
        var next = String.fromCharCode(c.charCodeAt() + 1);
        console.log(next);
        if(/[aeiou]/g.test(next)){
            next = next.toUpperCase();
        }
        return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
    });
}
var str = "this is all lower case";
console.log(LetterChanges(str));