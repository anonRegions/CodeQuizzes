function SimpleMode(arr) {
    var mode = 0;
    //loop through array
    for (var i = 0; i < arr.length; i++) {
        // If item at object index arr[i] is null, assign value of 1
        if (!SimpleMode[arr[i]]) {
            SimpleMode[arr[i]] = 1;
        }
        else {
            // else increment value at object index arr[i]
            SimpleMode[arr[i]]++;
            //console.log(SimpleMode[arr[i]]);
            // if object at index arr[i] > mode, assign value of arr[i] to mode
            if (SimpleMode[arr[i]] > mode) {
                mode = arr[i];
            }
        }
    }
    return mode;
}
var arr = [13, 18, 13, 14, 13, 16, 14, 21, 13];
console.log(SimpleMode(arr));