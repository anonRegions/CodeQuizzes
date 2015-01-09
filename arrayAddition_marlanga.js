// Annotate this
function back(arr, ideal, current){
    var value;
    for (var i=0;i<arr.length;i++)
    {
        value=arr[i];
        arr.splice(i,1);
        if (ideal==current+value) return true;
        if (ideal>current+value)
            if (back(arr, ideal, current+value))
                return true;
        arr.splice(i,0,value);
    }
    return false;
}
function ArrayAdditionI(arr) {
    var max = Math.max.apply(null,arr);
    arr.splice(arr.indexOf(max),1);
    return back(arr,max,0);

}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));