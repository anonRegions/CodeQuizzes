// Created by Ethan on 11/18/2014.
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    console.log(x);
    return x * factorial(x - 1);
}
var number = 6;
console.log(factorial(number, 10));
