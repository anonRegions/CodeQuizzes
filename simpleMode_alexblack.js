function SimpleMode(arr) {
    var max = 1
    var number
    for(var i = 0; i < arr.length; i++){
        var count = 1
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++
                console.log(count)
            }
        }
        if(count > max){
            max = count
            number = arr[i]
        }
    }
    // code goes here
    return max > 1 ? number : -1

}
var arr = [0,0,0,1,2];
//13, 18, 13, 14, 13, 16, 14, 21, 13];
//3,4,1,6,10
//1,1,1,2,3,4,5,1,1,1,1
console.log(SimpleMode(arr));