function TimeConvert(t) {
    var min = t;
    var secs = 60;
    var date = new Date(min * secs * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    if (hh > 12) {hh = hh - 12;}
    var time = hh+":"+mm;
    return time;
}

console.log(TimeConvert(45));