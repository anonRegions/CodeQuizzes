//Swap the case of each character in a string
function SwapCase(str) {
    var newStr = [];
    str = str.replace(/[a-zA-Z]/, function(char) {
        for (var i = 0; i < str.length; i++) {
            char = String.fromCharCode(str.charCodeAt(i));
 /*
            if (str.charCodeAt(i) < 65 || (str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97) || str.charCodeAt(i) > 122) {
                if (!newStr[i]) newStr.push(str[i]);
                else newStr++;
                }
            }   */
            if (str.charCodeAt(i) == 32) {
                newStr.push(str[i]);
            } else {
                if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                    if (!newStr[i]) newStr.push(str[i].toUpperCase());
                    else {
                        newStr++;
                        newStr.push(str[i].toUpperCase());
                    }
                } else {
                    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                        if (!newStr[i]) newStr.push(str[i].toLowerCase());
                        else {
                            newStr++;
                            newStr.push(str[i].toLowerCase());
                        }
                    }
                }

            }
        }
    });
    return newStr.join(' ');
}
var str = "tUnE yArDs";
console.log(SwapCase(str));