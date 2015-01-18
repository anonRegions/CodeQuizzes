var array = [], rangeLim = 10e4;
var count = 0;

function buildArr() {
    // Build array from 0 to 10e4, each item == true
    for (var i = 0; i < rangeLim; i++) {
        array.push(i);
    }
    return array;
}

var num = 22;
console.log(buildArr(num));