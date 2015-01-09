function LetterCountI(str) {
    //split str into array of words
    var words = str.split(' ');
    var maxCount = 0;
    //loop through words array
    for(var i=0;i<words.length;i++){
        //regEx lookahead (x(?=y) used below;
        //means it matches x only if x is followed by y
        //i.e., match alpha char only if followed by instance of that char
        var hi = words[i].match(/([a-z])(?=.*\1)/ig);
        //test for null
        if(hi != null){
            //if length of hi (repeated chars) > maxCount
            if(hi.length>maxCount){
                //assign hi.length to maxCount
                maxCount = hi.length;
                //assign word with maxCount to maxWord
                var maxWord = words[i];
            }
        }
    }
    //return either maxWords or -1 if hi == null
    return maxWord || -1;
}
var str = "delete accomplish aardvark";
console.log(LetterCountI(str));
//delete accomplish aardvark
//Today is the greatest day ever!
//the dog and cat
//a bat cat rat