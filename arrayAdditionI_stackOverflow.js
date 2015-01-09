/* The goal is to find if any combination of integers in the
 * array equal the largest integer in the array.
 * It's the or condition at the end that makes the function
 * check all combinations.
 * The function shaves off a number from the array, then it
 * checks if it's possible to find a solution either without
 * that number or with that number. If you for example have
 * the array [1,2,3,6], let's follow the part of the
 * recursion that finds the solution. The code will first
 * pick out 6 as the largest, then call the recursive
 * function to look for the sum 6 in [1,2,3].
 * The function will shave off 1, and then check if either
 * the sum 6 can be found in [2,3], or if the sum 5 (6-1)
 * can be found in [2,3].
 * The recursive call for the second case will shave off 2
 * from the array, and then check if the sum 5 can be found
 * in [3], or if the sum 3 (5-2) can be found in [3].
 * The recursive call for the second case will shave off 3
 * from the array (leaving it empty), and then check if 3
 * can be found in [], or if 0 (3-3) can be found in [].
 * The recursive call for the second case will match the
 * condition in the beginning of the function, and return true.
 *
 * Ok. I didn't realize it was saving the variable values as
 * it kept executing the left side of the or operator. Is it
 * creating a closure from not finishing the statement? Or
 * just in getting backed up in line in the call stack? Or
 * both? –  Matt Larsh Oct 11 at 1:04
 * @MattLarsh: The parameters and the n variable are local
 * to the function, so each call to the function gets their
 * own set of those. Exactly how that is implemented in
 * Javascript is not defined, but it has the same effect as
 * the parameters being pushed on the stack for the call,
 * and room is made on the stack for the n variable.     */
function ArrayAdditionI(arr) {
    arr.sort(function(a,b){
        return a - b;
    });
    /* The function shaves off a number from the array, then
     * it checks if it's possible to find a solution either
     * without that number or with that number. */
    var largest = arr.pop();
    function recursion(target,array){
        if(array.length === 0){
            return target === 0;
        }
        var n = array[0];
        /* arr.slice([begin[, end]])
         begin: Zero-based index at which to begin extraction.  */
        array = array.slice(1);
        return recursion(target,array) || recursion(target - n, array);
    }
    return recursion(largest,arr);
}
var arr = [3, 5, -1, 8, 12];
console.log(ArrayAdditionI(arr));
