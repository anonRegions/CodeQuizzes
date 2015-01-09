// Created by Ethan on 11/18/2014.
// For this challenge you will be adding up all the numbers from 1 to a certain argument.
function SimpleAdding(num) {
   var total = 0;
   for (var i = 0; i <= num; i++) {
       total += i;
   }
    return total;
}
var num = 10;
console.log(SimpleAdding(num));