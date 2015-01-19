// Created by Matt Larsh
function CountingMinutesI(str) {
    /*(?=-): lookahead--match .+ only if it's followed by '-'
     * --grabs first time in string      */
    var time1 = str.match(/.+(?=-)/g).join("");
    /*(?!-): lookahead--match 'm' only if 'm' not followed by '-'
     * --grabs second time in string
     * -- {1,2}: min & max number of times element must appear */
    var time2 = str.match(/\d{1,2}:\d\d[ap]m(?!-)/g).join("");
    /* match \d{1,2} only if followed by ':'
     * --grabs first hour integer      */
    var hours1 = time1.match(/\d{1,2}(?=:)/g) * 1;
    // --grabs second hour integer
    var hours2 = time2.match(/\d{1,2}(?=:)/g) * 1;
    // if first hourly number is in pm, add 12 to hours
    if(hours1 != 12 && /p/g.test(time1)){
        hours1 += 12;
    }
    // if second hourly number is in pm, add 12 to hours
    if(hours2 != 12 && /p/g.test(time2)){
        hours2 += 12;
    }
    // if first hourly number is in am, set hours1 to 0
    if(hours1 == 12 && /a/g.test(time1)){
        hours1 = 0;
    }
    // if second hourly number is in am, set hours1 to 0
    if(hours2 == 12 && /a/g.test(time2)){
        hours2 = 0;
    }
    // verifying that string is for mins, coercing to number
    var mins1 = time1.match(/\d\d(?=[ap])/g) * 1;
    var mins2 = time2.match(/\d\d(?=[ap])/g) * 1;
    var totalMins1 = (hours1 * 60) + mins1;
    var totalMins2 = (hours2 * 60) + mins2;
    /* Determine which number is larger, then subtract the
     * smaller from the larger, returning absolute value
     * of the result      */
    if(totalMins1 > totalMins2){
        return Math.abs(1440 - (totalMins1 - totalMins2));
    } else if(totalMins1 < totalMins2){
        return Math.abs((totalMins2 - totalMins1));
    }
}

var str = "1:00pm-11:00am";
//var str = "9:00am-10:00pm";
console.log(CountingMinutesI(str));
