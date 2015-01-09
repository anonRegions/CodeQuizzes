/*  determine the difference in hours and minutes between two given
 *  times.
 *  have the function TimeConvert(num) take the num parameter being
 *  passed and return the number of hours and minutes the parameter
 *  converts to (ie. if num = 63 then the output should be 1:3).
 *  Separate the number of hours and minutes with a colon.  */
function TimeConvert(num) {
    var min = 0;
    if (num >= 60) {
        if (num % 10 != 0) {
            min = num % 10;
        }
        num = num/60 + ":" + min;
    }
    return num;
}

console.log(TimeConvert(126));
/*
Input = 126Output = "2:6"
Input = 45Output = "0:45"
But code above returns 2.1:6
*/