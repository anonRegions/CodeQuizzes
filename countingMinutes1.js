/* function CountingMinutesI(str) take the str parameter being
 * passed which will be two times (each properly formatted with
 * a colon and am or pm) separated by a hyphen and return the
 * total number of minutes between the two times. The time will
 * be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is
 * 1:00pm-11:00am the output should be 1320.     */
function CountingMinutes1(str) {
    var time = str.match(/(\d+)\:(\d+)\w+-(\d+)\:(\d+)\w+/);
    //NEED TO TEST IF AM OR PM; CODE BELOW IS FOR ONE OR THE OTHER
    var timeOneHrs = time[1] * 60;
    var timeOneMin = time[2];
    var timeTwoHrs = time[3] * 60;
    var timeTwoMin = time[4];
    return (timeTwoHrs-timeOneHrs) + (timeTwoMin-timeOneMin);
}

var str = "9:00am-10:00am";
console.log(CountingMinutes1(str));