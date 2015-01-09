/* Take the num parameter being passed and return the string true
 * if the parameter is a prime number, otherwise return the string
 * false. The range will be between 1 and 2^16.
 * THIS DOESN'T WORK--FIX*/
function PrimeTime(num) {
    if (num >= 1 && num <= 2e16) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
var num = 3;
console.log(PrimeTime(num));