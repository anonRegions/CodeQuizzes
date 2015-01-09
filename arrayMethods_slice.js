/* Another fundamental method is slice, which takes a start index
 * and an end index and returns an array that has only the
 * elements between those indices. The start index is inclusive,
 * the end index exclusive.  */

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
/* When the end index is not given, slice will take all of the
 * elements after the start index. Strings also have a slice
 * method, which has a similar effect.
 *
 * The concat method can be used to glue arrays together,
 * similar to what the + operator does for strings. The
 * following example shows both concat and slice in
 * action. It takes an array and an index, and it returns
 * a new array which is a copy of the original array with
 * the element at the given index removed.  */

// values passed are array & 2
 function remove(array, index) {
    // returns array with indexes 0, 1
    return array.slice(0, index)
        // concats array indexes 3 to end
        .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]