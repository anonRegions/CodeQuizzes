//Returns string lengths, not the strings themselves
function ThirdGreatest(s) {
    //create empty array for length numbers
    var lengths = [], third = s.length-3;
    //loop thru str array, pushing each length to length arr
    s.forEach(function(item) {
        lengths.push(item.length);
        lengths.sort(function(a, b) {
            return a - b;
        })
    });
    return lengths[third];
}

var strArr = ["Hello", "thesaurus", "pumpkin", "watermelon", "hypotenuses", "two"];
console.log(ThirdGreatest(strArr));