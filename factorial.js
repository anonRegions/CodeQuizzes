// Stack Overflow version:
function fact(x) {
    //If x == 0, return 1
    if(x==0) {
        return 1;
    }
    //All else, recursively multiple number * (number -1)
    return x * fact(x-1);
}

// Function run traverses list from 0 - 10
function run(number) {
    //Calls fact(), passing number to be processed;
    //Converts returned value to int via parseInt();
    //Passes result to alert().
    alert(fact(parseInt(number, 10)));
}
