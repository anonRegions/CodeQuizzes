function SwapCase(str) {
    var output='';
    for(var i=0;i<str.length;i++){
        var charCode=str.charCodeAt(i);
        if(charCode>64&&charCode<91){//is cap
            charCode+=32;
        }else if(charCode>96&&charCode<123){
            charCode-=32;
        }
        output+=String.fromCharCode(charCode);
    }
    // code goes here
    return output;

}
var str = "tUnE yArDs";
console.log(SwapCase(str));