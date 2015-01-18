/* Have the function PrimeMover(num) return the numth prime number.
 * The range will be from 1 to 10^4. For example: if num is 16 the
 * prime should be 53 as 53 is the 16th prime number.  */
function PrimeMover(num) {
    var array = [], rangeLim = 10e4;
    var primes = [];

        // Build array from 0 to 10e4, each item == true
    for (var i = 0; i < rangeLim; i++) {
        array.push(i);
    }

    /* Define range of test for multiples of prime,
     * incrementing by i. i starts at first prime. */
    var primeLim = Math.sqrt(num);
    for (var j = 2; j <= primeLim; j++) {
        if (array[j]) {
            //j == i squared, j increments by j up to num -1.
            //So multiples of primes are set to false
            for (j = i * i; l = array.length, j < l; j += i) {
                array[j] = 0;
            }
        }
    }

    //Values where array[i] == true are pushed to primes
    for (i = 2; i < array.length; i++) {
        if (array[i] !== 0) primes.push(i);
    }
    return primes[num];
}

var num = 8;
console.log(PrimeMover(num));