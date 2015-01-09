// Figure this out & annotate it
function ArrayAdditionI(arr) {
    var largest = arr.sort(function(a,b){return a-b}).pop();
    function recursion(target, array){
        if(array.length === 0){
            return target === 0;
        }
        var n = array[0];
        array = array.slice(1);
        return recursion(target,array) || recursion(target-n,array);
    }
    return recursion(largest,arr);
}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));