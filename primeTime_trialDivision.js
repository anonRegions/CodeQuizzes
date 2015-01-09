/* This is in Python. Convert it to JavaScript.
 * THIS DOESN'T WORK--FIX */
function PrimeTime(n) {
    //Return a list of the prime factors for a natural number.
    if (n == 1) return 1;
    var primes = prime_sieve(parseInt(Math.sqrt(n)) + 1);
    console.log(primes);
    var primeFactors = [];
    for (var p in primes) {
        if ((p * p) > n) break;
        while (n % p == 0) {
            primeFactors.push(p);
            n = n/p;
        }
        if (n > 1) primeFactors.push(n);
    }
    return primeFactors;
}
var n = 3;
console.log(PrimeTime(n));

