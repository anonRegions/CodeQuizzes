// By jackgeek on Codebyte
function TimeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    // code goes here
    return hours + ':' + minutes;

}

console.log(TimeConvert(97));
