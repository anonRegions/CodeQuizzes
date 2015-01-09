// Source: https://gist.github.com/lrvick/1381084
// Applies to ArrayAdditionI problem
// ANNOTATE THIS
var subset_sum = function(items, target) {
    var perms = [], layer = 0, depth = 4, attempts = 0, sum, perm,
        //items array passed to function
        ss = function(items) {
            //removes first element from array; returns that element
            var item = items.shift();
            console.log(item);
            for (i = 0; i < items.length; i++) {
                attempts = attempts + 1;
                //limit condition: items.length squared
                if (attempts <= items.length * items.length) {
                    //if bottom layer of array, assign values of item[0], items[i]
                    if (layer === 0) {
                        perm = [items[0], items[i]];
                        console.log(perm);
                    } else {
                        //else remove first element; add items[0] to perm[]
                        perm = perms.shift();
                        console.log(perm);
                        perm.push(items[0]);
                        console.log(perm);
                    }
                    sum = 0;
                    for(j = 0;j < perm.length; j++){
                        sum += perm[j];
                        console.log(sum);
                    }
                    perms.push(perm);
                    console.log(perms);
                    if (sum == target){
                        return perm;
                    }
                } else {
                    if (layer < depth) {
                        attempts = 0;
                        layer = layer + 1;
                        console.log(layer);
                    } else {
                        return null;
                    }
                }
            }
            items.push(item);
            return ss(items);
        };
    return ss(items)
};

items = [1, 2, 3, 4, 5];
target = 15;
result = subset_sum(items, target);
console.log(result);
