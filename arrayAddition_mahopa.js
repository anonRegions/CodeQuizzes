// Annotate this
function ArrayAdditionI(arr) {
    var biggest = arr.sort(function(a,b){return a-b});
    var ct = 0;
    for(x in arr){
        ct += arr[x];
    }
    if (ct - biggest== biggest){
        return true;
    }
    // code goes here
    return false;
}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));
