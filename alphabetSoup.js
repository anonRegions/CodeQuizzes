//sort characters in a string.
function AlphabetSoup(str) {
    var strArr = str.split("").sort().join("");
        return strArr;
}

var str = "Is this the Pulp Fiction screenplay?";
console.log(AlphabetSoup(str));