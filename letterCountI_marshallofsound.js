function LetterCountI(str) {
    var max=0;
    var maxI=0;
    for (var i=0;i<26;i++) {
        var char=String.fromCharCode(97+i);
        var arr = str.replace(new RegExp("[^"+char+", ]","gi"),"").split(" ");
        var l=arr.sort(function(a,b) {return b.length-a.length})[0].length;
        var x = str.replace(new RegExp("[^"+char+", ]","gi"),"").split(" ").indexOf(arr.sort(function(a,b) {return b.length-a.length})[0]);
        if (l>max) {max = l; maxI=x;}
    }
    return max!=1 ? str.split(" ")[maxI]:-1;
}
var str = "the dog and cat";
console.log(LetterCountI(str));
//delete accomplish aardvark
//Today is the greatest day ever!
//the dog and cat
//a bat cat rat