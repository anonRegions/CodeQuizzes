/* Have the function PrimeMover(num) return the numth prime number.
 * The range will be from 1 to 10^4. For example: if num is 16 the
 * output should be 53 as 53 is the 16th prime number.  */
 function PrimeMover(num) {
    var array = [], rangeLim = 10e4, primeLim = Math.sqrt(num);
     var output = [], count = 0;
    // Build array from 0 to 10e4, each item == true
    for (var i = 0; i < rangeLim; i++) {
        array.push(i);
    }
    /* Define range of test for multiples of prime,
     * incrementing by i. i starts at first prime. */
     for (var i = 2; i <= primeLim; i++) {
         if (array[i]) {
             //j == i squared, j increments by i up to num -1.
             //So multiples of primes are set to false
             for (var j = i * i; j < num; j += i) {
                 array[j] = false;
             }
         }
     }
     //CHANGE THIS--POPULATE ARRAY OF PRIMES, THEN TRAVERSE & COUNT
     //Values where array[i] == true & i < num are pushed to output
     for (var i = 2; i < num; i++) {
         if(array[i]) {
             output.push(i);
         }
     }
     //CHANGE THIS
     //return num-th item in array of primes
     return output[output.length-1];
 };

var num = 8;
console.log(PrimeMover(num));