// For this challenge you will be comparing two numbers and determining which one is greater.
function CheckNums(a, b) {
    if (a == b) {
        return -1;
    } else {
        if (a > b) {
            return a;
        } else if (b > a) {
            return b;
        }
    }
}

console.log(CheckNums(47, 99));