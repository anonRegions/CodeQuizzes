/* function CountingMinutesI(str) take the str parameter being
 * passed which will be two times (each properly formatted with
 * a colon and am or pm) separated by a hyphen and return the
 * total number of minutes between the two times. The time will
 * be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is
 * 1:00pm-11:00am the output should be 1320.     */
function CountingMinutes1(str) {
    var time = str.match(/(\d+)\:(\d+)(\w+)-(\d+)\:(\d+)(\w+)/);
    var timeOneHrs = time[1] * 60;
    var timeOneMin = time[2];
    var timeTwoHrs = time[4] * 60;
    var timeTwoMin = time[5];
    if (time[6] === "pm") timeTwoHrs += 720;
    if (time[3] === "pm") {
        timeOneHrs += 720;
        timeTwoHrs += 1440;
    }

    return (timeTwoHrs-timeOneHrs) + (timeTwoMin-timeOneMin);
}
var str = "1:00pm-11:00am";
//var str = "9:00am-10:00pm";
console.log(CountingMinutes1(str));