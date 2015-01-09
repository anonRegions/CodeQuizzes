// See if combination of numbers in array add up to largest
function ArrayAdditionI(array, target) {
    var total = 0, l = array.length;
    for (var i in array) {
        // Add remaining array items
        total += array[i];
    }
    if (total == target) {
        return "true";
    } else {
        if (total < target) {
            return "false";
        } else {
            if (total > target) {
                //var testArr = [];
                for (i = 0; i < l; i++) {
                    total = 0;
                    for (var j = i; j < l; j++) {
                        //add each remaining array item
                        total += array[j];
                        if (total == target) {
                            return "true";
                        } else {
                            if (total > target) {
                                // Calc difference between largest num & array total
                                var over = total - target;
                                for (var k = 0; k < l; k++) {
                                    // Subtract each array item from overage & retest
                                    over -= array[k];
                                    if (over == array[k]) {
                                        return "true";
                                    } else {
                                    }
                                }
                            }
                        }
                    }
                    for (var m = 0; m < array.length ; m++) {
                        //subtract each array item from total
                        total -= array[m];
                        if (total == target) {
                            return "true";
                        }
                    }
                }
            }
            return "false";
        }
    }
}

function largestNum(arr) {
    arr.sort(function(a, b){return a-b});
    var largest = arr.pop();
    console.log(ArrayAdditionI(arr, largest));
}

var arr = [31,2,90,50,7];
largestNum(arr);
/*
 * 1. When the input was (1,2,3,4) your output was incorrect.
 * 2. When the input was (10,20,30,40,100) your output was incorrect.
 * 3. When the input was (54,49,1,0,7,4) your output was incorrect.
 * 4. When the input was (3,4,5,7) your output was incorrect.
 * 5. When the input was (31,2,90,50,7) your output was incorrect.
 */
