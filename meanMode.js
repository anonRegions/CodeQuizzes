// Determine if the mode equals the mean in an array.
var meanMode = function (arr) {
    var total = 0, mean = 0;
    for (var i in arr) {
        total += arr[i];
    }
    mean = total / arr.length;
    //console.log("The array mean is " + mean);

    var count = 1, testVal = 0, subtotals = {}, modalItem = arr[0];
    if (arr.length = 0) return null;
    for (var j in arr) {
        testVal = arr[j];
        if (subtotals[testVal] == null) {
            subtotals = 1;
        } else {
            subtotals[testVal]++;
        }
        if (subtotals[testVal] > count) {
            modalItem = testVal;
        }
        count = subtotals[testVal];
    }
    //console.log("The array mode is " + modalItem);
    if (mean == modalItem) {
        return 1;
    } else {
        return 0;
    }
};
var arr = [13, 18, 13, 14, 13, 16, 14, 21, 13];
console.log(meanMode(arr));
