function DashInsert(num) {
    num = " "+ num;
    var str = "";
    for (var i = 0; i < num.length; i++)
    {
        if (i > 0)
            if (num[i] % 2 > 0 && num[i-1] % 2 > 0) str += "-";
        str += num[i];
    }
    return str;
}
var num = 6176345789;
console.log(DashInsert(num));