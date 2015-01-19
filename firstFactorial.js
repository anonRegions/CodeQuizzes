// Created by Ethan on 1/19/2015.
/* Find the factorial for a given number. A factorial is the
 * product of an integer and all the integers below it; e.g.,
 * factorial four ( 4! ) is equal to 24      */
function FirstFactorial(num) {
    var fact = num;
    //increment from 1 to num, not inclusive
    for (var i = 1; i < num; i++) {
        //multiply i * fact
        function multiply() {
            return fact *= i;
        }
        fact = multiply(fact);
    }
    return fact;
}
var num = 8;
console.log(FirstFactorial(num));