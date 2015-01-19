// Created by Ethan on 1/19/2015.
function LongestWord(arr) {
    var words = [];
    //populate array with word lengths
    for (var i = 0; i < arr.length; i++) {
        if (!words[0]) words.push(arr[i].length);
        else {
            words.push(arr[i].length);
        }
    }
    //sort the lengths array (in this case, smallest to largest)
    words.sort(function(a, b){
        return a - b;
    });
    //return word at highest index (could be 0 if sort reversed)
    return words[arr.length-1];
}

var arr = ['Rumplestiltskin', 'Pinocchio', 'red', 'wombat', 'Io'];
console.log(LongestWord(arr));