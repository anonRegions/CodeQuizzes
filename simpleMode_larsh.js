function SimpleMode(arr) {
    var two = arr.join(' ').match(/(\d+)(?=.+\b\1\b)/ig);
    var three = arr.join(' ').match(/(\d+)(?=(.+\b\1\b){2})/ig);
    var four = arr.join(' ').match(/(\d+)(?=(.+\b\1\b){3})/ig);
    return four ? four.shift() : three ? three.shift() : two ? two.shift() : -1;
}
var arr = [0,0,0,1,2];
//13, 18, 13, 14, 13, 16, 14, 21, 13];
//3,4,1,6,10
//1,1,1,2,3,4,5,1,1,1,1
console.log(SimpleMode(arr));