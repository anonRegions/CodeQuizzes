/* Traverse a string searching for all the numbers and then
 * you will add them up.
 *
 * Have the function NumberSearch(str) take the str parameter,
 * search for all the numbers in the string, add them together,
 * then return that final number. For example: if str is
 * "88Hello 3World!" the output should be 91. You will have to
 * differentiate between single digit numbers and multiple
 * digit numbers like in the example above. So "55Hello" and
 * "5Hello 5" should return two different answers. Each string
 * will contain at least one letter or symbol. */
function NumberSearch(str) {
    var nums = [], total = 0, regx = /\d+/g;
    nums = str.match(regx);
    for (var i in nums) {
       total += parseInt(nums[i]);
    }
    return total;
}
var str = "Runa2ebrErA4*tR";
console.log(NumberSearch(str));