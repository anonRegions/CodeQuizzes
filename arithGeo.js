function ArithGeo(arr) {
    var arith, geo;
    for (var i = 0; i < arr.length -2; i++) {
        if (arith = arr[i + 1] - arr[i] == arr[i + 2] - arr[i + 1]) {
            return "Arithmetic";
        } else {
            if (!arith) {
                break;
            }
        }
    }
    for (var i = 0; i < arr.length -2; i++) {
         if ((geo = Math.ceil(arr[i + 1] / arr[i])) == Math.ceil(arr[i + 2] / (arr[i] + 1))) {
             return "Geometric";
         } else {
             break;
         }
    }
    return -1;
}
var arr = [2, 6, 8, 20];
console.log(ArithGeo(arr));