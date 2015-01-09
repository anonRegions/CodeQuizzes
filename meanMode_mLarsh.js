function MeanMode(arr) {
    var sum = 0;
    var mode = 0;
    //loop through array
    for(var i=0;i<arr.length;i++){
        // Add current value at arr[i] to sum--needed to calc mean-mode equality
        sum += arr[i];
        // If item at object index arr[i] is null, assign value of 1
        if(!MeanMode[arr[i]])MeanMode[arr[i]] = 1;
        else {
            // else increment value at object index arr[i]
            MeanMode[arr[i]]++;
            console.log(MeanMode[arr[i]]);
            // if object at index arr[i] > mode, assign value of arr[i] to mode
            if(MeanMode[arr[i]] > mode) mode = arr[i];
        }
    }
    // return value depending on comparison of mean & mode
    if(mode === sum/arr.length) return 1;
    return 0;
}
var arr = [13, 18, 13, 14, 13, 16, 14, 21, 13];
console.log(MeanMode(arr));