// Created by Ethan on 12/10/2014
function DashInsert(str) {
    // use regex to insert dashes at certain intervals
    return str.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}
var str = "6176345789";
console.log(DashInsert(str));