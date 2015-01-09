// Annotate this
function nextPerm(setSize, perm, col) {
    var i;
    if (perm.length === 0) {
        perm.push(-1);
        col = 0;
    }
    if (typeof col === 'undefined') {
        col = perm.length - 1;
    }
    perm[col] += 1;
    for (i = col + 1; i < perm.length; i++) {
        perm[i] = perm[col] + i - col;
    }
    if (perm[perm.length - 1] === setSize) {
        if (col > 0) {
            return nextPerm(setSize, perm, col - 1);
        } else {
            if (perm.length === setSize) {
                perm.splice(0, setSize);
                return true;
            } else {
                var newSize = perm.length + 1;
                perm.splice(0, perm.length);
                for (i = 0; i < newSize; i++) {
                    perm.push(i);
                }
            }
        }
    }
    return false;
}

function ArrayAdditionI(arr) {
    arr.sort(function(a,b){return a-b;});
    var max = arr.pop();
    var setSize = arr.length;
    var perm = [];
    while (!nextPerm(setSize, perm)) {
        var sum = 0;
        for (var i = 0; i < perm.length; i++) {
            sum += arr[perm[i]];
        }
        if (sum === max) {
            return true;
        }
    }
    return false;
}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));
