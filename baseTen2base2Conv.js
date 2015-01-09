// Created by John Nieves on 1/8/2015.
function int32ToIp(int32){
    //binInt represents incomplete binary conversion
    binInt = "";
    while (int32 >= 1) {
        //console.log(Math.sqrt(int32));
        int32 = int32 / 2;
        console.log(int32);
        if (int32 % 1 >= .5) {
            binInt += "1";
        } else if (int32 % 1 < .5) {
            binInt += "0";
        }
    }
    console.log(binInt);
// below is DEFINITELY not working yet.
    var tempStr, int8 = 0;
    for (var i = 0; i < binInt.length; i+=8) {
        tempStr = binInt.substring(i, i+8); // extract chunk in 8bit segments
        // reverse chunk for calculation from left to right
// actually .. may not need to do this, can count chars and just iterate downward instead of up from initial.
        for (var j = 0; j < tempStr.length; j++) {
            // need to build out binary to 8 bit address converter
            int8 += Math.pow(2, j) * Number(tempStr.charAt(j));
        }
    }
    return int8;
}
var int32 = 1000;
console.log(int32ToIp(int32));