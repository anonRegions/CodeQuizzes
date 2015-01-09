/* Consider this puzzle: by starting from the number 1 and repeatedly
 * either adding 5 or multiplying by 3, an infinite amount of new
 * numbers can be produced. How would you write a function that,
 * given a number, tries to find a sequence of such additions and
 * multiplications that produce that number? For example, the number
 * 13 could be reached by first multiplying by 3 and then adding 5
 * twice, whereas the number 15 cannot be reached at all.
 *
 * Here is a recursive solution:    */
     // console.log invokes findSolution, passing 24 to param
     function findSolution(target) {
        function find(start, history) {
            // when start == 1 & target == 24, no match
            if (start == target)
                return history;
            // same story
            else if (start > target)
                return null;
            // Here the addition/multiplication start
            else
                /* call to find() increments start & history by adding 5 or
                multiplying by 3, as required, to reach target.  */
                return find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");
        }
        // return invokes find(), passing values to its params
        return find(1, "1");
    }
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)