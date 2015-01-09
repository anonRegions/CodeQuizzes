function divisor_checker(divisor_array, low, high) {
    //for loop through range of numbers
    for (var i = low; i <= high; i++) {
        //print out all numbers
        //inner loop thru divisor_array to print "one_match"
        for (var j = i; j < divisor_array.length; j++) {
            //if i is divisible by element of divisor_array, print "one_match"
            if (j % divisor_array[j] == 0) {
                console.log(j + " one_match");
            } else {
                console.log(j);
            }
        }
    }
}
var divisor_array = [2,23];
var low = 1;
var high = 7;
console.log(divisor_checker(divisor_array, low, high));