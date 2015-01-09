// Annotate this
function ArrayAdditionI(arr) {
    var max = Math.max.apply(null,arr);
    arr.splice(arr.indexOf(max),1);
    var sums = [],
        len = arr.length,
        combinationsCount = (1 << len);

    for (var i = 1; i < combinationsCount; i++) {
        var sum = 0;
        for (var j = 0; j < len; j++) {
            if ((i & (1 << j))) {
                sum += arr[j]
            }
        }
        sums.push(sum)
    }
    return sums.indexOf(max) !== -1;
}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));