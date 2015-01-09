//sum all nums in multidim array
function deep_array_sum(arr) {
    var sum = 0;
    // loop through array
    for (i = 0; i < arr.length; i++) {
        // get innermost array elements
        //arr[arr.length-1].length);    //--> 2
        if (arr[arr.length-1].length > 1) {
            //add those elements to sum
            for (var i = 0; i < arr[arr.length-1].length; i++) {
                sum += i;
                console.log(sum);   //--> 0
            }
        }
    }
    return sum;
}
var arr = [1,2,3,[4,5]];
//[1,2,3,[4,5,[3,4],1]]
//15
//23
console.log(deep_array_sum(arr));