/* Create a function called min_value() that accepts an array
 * of numbers as an argument and returns the smallest value
 * from the array.   */
function min_value(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

var arr = [7, 26, 3, 14];
console.log(min_value(arr));