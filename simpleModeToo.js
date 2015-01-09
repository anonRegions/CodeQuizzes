/*  Take array of numbers stored in arr and return number that appears
 *  most frequently (the mode). For example: if arr contains
 *  [10, 4, 5, 2, 4] the output should be 4. If there is more than one
 *  mode return the one that appeared in the array first (ie.
 *  [5, 10, 10, 6, 5] should return 5 because it appeared first). If
 *  there is no mode return -1. The array will not be empty.  */
function SimpleMode(arr) { //[3, 4, 1, 6, 10]
    var mode = 0, num = 0, numbers = {};
    for (var i = 0; i < arr.length; i++) {
        num = arr[i];
        if (!numbers[num]) numbers[num] = 1;
        else {
            numbers[num]++;
        }
        console.log(numbers);

        if (numbers[num] > mode) {
            mode = num;
            console.log(mode);
        }
    }
    if (mode < 1) return -1;
    else {
        return mode;
    }
}
var arr = [0,0,0,1,2];
    //13, 18, 13, 14, 13, 16, 14, 21, 13];
    //3,4,1,6,10
    //1,1,1,2,3,4,5,1,1,1,1
console.log(SimpleMode(arr));
