// determine whether or not certain characters are in correct positions.
/* have the function SimpleSymbols(str) take the str parameter being
passed and determine if it is an acceptable sequence by either returning
the string true or false. The str parameter will be composed of + and =
symbols with several letters between them (ie. ++d+===+c++==a) and for
the string to be true each letter must be surrounded by a + symbol. So
the string to the left would be false. The string will not be empty and
will have at least one letter.  */

function SimpleSymbols(str) {
    // String has no a-z characters at all
    if (!/[a-z]/.test(str)) {
        return false;
        // Has a-z characters, all of them surrounded by `+`
    } else {
        if (!/[a-z]/.test(str.replace(/\+[a-z](?:\+[a-z])*\+/g, ""))) {
            return true;
        } else {
            // Has a-z characters, at least one not surrounded by `+`
            return false;
        }
    }
}

var str = "++d+===+c++==+a+";
console.log(SimpleSymbols(str));