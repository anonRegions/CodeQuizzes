function SimpleMode(arr) {

    // code goes here
    var modeArr = new Array();
    for (var i=0;i<arr.length;i++) {
        if (modeArr[arr[i]]) {
            modeArr[arr[i]]+=1;
        } else {
            modeArr[arr[i]] = 1;
        }
    }
    var max=0;
    var maxNum=0;
    for (i=0;i<arr.length;i++) {
        if (modeArr[arr[i]]>max) {
            max = modeArr[arr[i]];
            maxNum = arr[i]
        }
    }
    if (max!=1) {
        return maxNum;
    } else {
        return -1;
    }

}
var arr = [0,0,0,1,2];
//13, 18, 13, 14, 13, 16, 14, 21, 13];
//3,4,1,6,10
//1,1,1,2,3,4,5,1,1,1,1
console.log(SimpleMode(arr));