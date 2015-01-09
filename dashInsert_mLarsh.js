function DashInsert(num) {
    var count = 0;
    function addDash(one){
        count++;
        var two = one.replace(/[13579][13579]/g,function(c){
            return c[0] + '-' + c[c.length-1];
        });
        if(count === 3)return two;
        return addDash(two);
    }
    return addDash(num.toString());
}
var num = 6176345789;
console.log(DashInsert(num));