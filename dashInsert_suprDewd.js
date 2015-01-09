function DashInsert(num) {
    if (num == '') return '';
    num = num + '';
    var s = '' + num[0];

    for (var i = 1; i < num.length; i++) {
        var l = parseInt(num[i - 1], 10),
            r = parseInt(num[i], 10);

        if (l % 2 != 0 && r % 2 != 0) s += '-';
        s += num[i];
    }

    // code goes here
    return s;

}
var num = 6176345789;
console.log(DashInsert(num));