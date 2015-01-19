/* Have the function PrimeMover(num) return the numth prime number.
 * The range will be from 1 to 10^4. For example: if num is 16 the
 * prime should be 53 as 53 is the 16th prime number.  */
function PrimeMover(num) {
    var array = [], rangeLim = 10e4;
    var primes = [];
    buildArr(num);

    function buildArr(num) {
        // Build array from 0 to 10e4, each item == true
        for (var i = 0; i < rangeLim; i++) {
            array.push(i);
        }
        return setMultiplesFalse(array, num);
    }

    function setMultiplesFalse(arr, num) {
        /* Define range of test for multiples of prime,
         * incrementing by i. i starts at first prime. */
        var primeLim = Math.sqrt(num);
        for (var i = 2; i <= primeLim; i++) {
            if (arr[i]) {
                //j == i squared, j increments by i up to num -1.
                //So multiples of primes are set to false
                for (var j = i * i; l = arr.length, j < l; j += i) {
                    arr[j] = 0;
                }
            }
        }
        return getPrimeNum(arr, num);
    }

    function getPrimeNum(a, num) {
        //Values where array[i] == true are pushed to primes
        for (var i = 2; i < a.length; i++) {
            if (a[i] !== 0) primes.push(i);
        }
        return primes[num];
    }
    return buildArr(primes[num]);
}

var num = 4;
console.log(PrimeMover(num));