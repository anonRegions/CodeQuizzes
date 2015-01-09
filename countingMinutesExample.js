function CountingMinutesI(str) {
    var times = str.split("-");
    //strip time down to [9, 00]
    var time1 = times[0].slice(0,times[0].length-2).split(":");
    //strip away a or p
    var time1ap = times[0][times[0].length-2];
    var time2 = times[1].slice(0,times[0].length-2).split(":");
    var time2ap = times[1][times[1].length-2];
    //convert to minutes
    var time1min = parseInt(time1[0]) * 60 + parseInt(time1[1]);
    var time2min = parseInt(time2[0]) * 60 + parseInt(time2[1]);
    //if time is pm, add 12 hours in minutes to time1min
    if(time1ap === "p" && time1[0] !== "12"){
        time1min += 12 * 60;
    }
    //if time is pm, add 12 hours in minutes to time2min
    else if(time2ap === "p" && time2[0] !== "12"){
        time2min += 12 * 60;
    }
    //if time is am, convert hours to minutes
    else if(time1ap === "a" && time1[0] === "12"){
        time1min -= (12 * 60);
    }
    //if time is am, convert hours to minutes
    else if(time2ap === "a" && time2[0] === "12"){
        time2min -= (12 * 60);
    }
    /* if time1min is later, subtract time1min from 24 hours in
     * min, then add time2min    */
    if (time1min > time2min){
        return ((24 * 60) - time1min) + time2min;
    } else{
        //else subtract time1min from time2min
        return time2min - time1min;
    }
}

var str = "9:00am-10:00am";
console.log(CountingMinutesI(str));