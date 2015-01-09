function ExOh(str) {
    return str.split(/x/i).length === str.split(/o/i).length;
}
var str = "x";
console.log(ExOh(str));