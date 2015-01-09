/* arr.forEach(callback[, thisArg])
 Parameters

 callback
 Function to execute for each element.
 thisArg
 Value to use as this when executing callback.
 */
var calcMean = function (arr) {
    var total = 0, mean = 0;
    for (var i = 0; i < arr.length; i++) {
        // add each element
        total += arr[i];
    }
    // Calculate mean
    mean = total / arr.length;
    console.log("The array mean is " + mean);
    calcMode(arr, mean);
};

var calcMode = function(arr, mean) {
    var testArr = [], count = 0, l = arr.length, k = 0;
    // Calculate mode
    arr.forEach(function(k) {
        if(testArr[0] == undefined || testArr[0] == null) {
            testArr[k] == arr[k];
            count += 1;
        } else {
            if (testArr[k] === arr[k]) {
                count += 1;
                console.log(count);
            }
        }
        return count;

    })
    };
var arr = [13, 18, 13, 14, 13, 16, 14, 21, 13];
console.log(calcMean(arr));