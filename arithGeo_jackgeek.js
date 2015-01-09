function isArith(arr) {
    var diff = arr[1] - arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] + diff !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function isGeo(arr) {
    var fact = arr[1] / arr[0];
    for (var i = 1; i < arr.length -1; i++) {
        if (arr[i] * fact !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function isArith(arr) {
    if (arr.length < 3) return -1;
    if (isArith(arr)) {
        return 'Arithmetic';
    }
    if (isGeo(arr)) {
        return 'Geometric';
    }
    return -1;
}
var arr = [2, 6, 8, 20];
console.log(ArithGeo(arr));