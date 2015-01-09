/* To find all the prime numbers less than or equal to a given
 * integer num by Eratosthenes' method:
 * 1. Create array of consecutive integers from 2 through num.
 * 2. Initially, let i equal 2, the first prime number.
 * 3. Count to num in increments of i; mark multiples of i as false.
 * 4. Find first number greater than i in array that is not false.
 *    a. If there was no such number, stop.
 *    b. Otherwise, let i now equal this new number (the next prime),
 *    and repeat from step 3.
 * 5. When algorithm terminates, all numbers in array not marked
 *    are prime. */
var eratosthenes = function(num) {
    // Eratosthenes algorithm to find all primes less than num
    var array = [], upperLimit = Math.sqrt(num), output = [];
    // Build array from 0 to num -1, each item == true
    for (var i = 0; i < num; i++) {
        array.push(true);
    }
    /* Define range of test for multiples of prime,
     * incrementing by i. i starts at first prime. */
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            //j == i squared, j increments by i up to num -1.
            //So multiples of primes are set to false
            for (var j = i * i; j < num; j += i) {
                array[j] = false;
            }
        }
    }
    //Values where array[i] == true & i < num are pushed to output
    for (var i = 2; i < num; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    //return num-th item in array of primes
    return output[output.length-1];
};

var num = 1000;
console.log(eratosthenes(num));