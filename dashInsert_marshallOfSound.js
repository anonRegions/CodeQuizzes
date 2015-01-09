function DashInsert(num) {
    num = num.toString();var n = num+"|";var nnum='';
    for (var i=0;i<num.length;i++) {
        nnum += n[i];
        if (/[1,3,5,7,9]{2}/g.test(n.substr(i,2))) {nnum += "-";}
    }
    return nnum;
}
var num = 6176345789;
console.log(DashInsert(num));