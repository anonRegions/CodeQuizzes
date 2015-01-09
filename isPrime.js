//From Wikipedia (http://en.wikipedia.org/wiki/Primality_test)
/* Given an input number n, check whether any integer m from
 * 2 to n − 1 evenly divides n (the division leaves no
 * remainder). If n is divisible by any m then n is composite,
 * otherwise it is prime.
 * All divisors are less than or equal to n/2.
 * Eliminate testing divisors > Math.sqrt(n).[1] We can
 * also eliminate all the even numbers greater than 2.
 * A more efficient method is to test if n is divisible by
 * 2 or 3, then to check through all the numbers of form
 * 6k ± 1 <= Math.sqrt(n).   */
function PrimeTime(num) {
    if (num >= 1 && num <= 2e16) {
        if (num <= 3) { return false; }
        if (num != Math.round(num)) {return false;}
        if (num % 2 == 0 || num % 3 == 0) { return false; }
        for (var  i = 5; i * i <= Math.sqrt(num); i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) { return false; }
        }
    }
    return true;
}
var num = 3;
console.log(PrimeTime(num));