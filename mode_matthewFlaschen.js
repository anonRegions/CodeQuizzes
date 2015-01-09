function mode(array)
{
    if(array.length == 0)
        return null;
    // Create object modeMap to populate with hash table
    var modeMap = {};
    /* Set initial value of var maxEl to value of 1st array item;
     * maxEl will track identity of array item with most hits.
     * maxCount will track number of array item hits > 1. */
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++) {

        // Assign value of array[i] to var el
        var el = array[i];
        // if map[el] is empty, assign 1 to map element labeled for array[i]
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            // else increment value at modeMap[el]
            modeMap[el]++;
        console.log(modeMap);
        // if value at current map element > maxCount
        if(modeMap[el] > maxCount)
        {
            // Assign value of var el to var maxEl
            maxEl = el;
            // Assign value of map element to maxCount
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
var array = [13, 18, 13, 14, 13, 16, 14, 21, 13];
console.log(mode(array));