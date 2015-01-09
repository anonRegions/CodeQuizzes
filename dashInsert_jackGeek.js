function isOdd(ch) {
    return '13579'.indexOf(ch) > -1;
}

function DashInsert(num) {
    var str = num.toString();
    var ans = '';
    for (var i = 0; i < str.length-1; i++) {
        ans += str[i];
        if (isOdd(str[i]) && isOdd(str[i+1])) {
            ans += '-';
        }
    }
    ans += str[str.length - 1];
    return ans;
}
var num = 6176345789;
console.log(DashInsert(num));
