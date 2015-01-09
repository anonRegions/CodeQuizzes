function LetterChanges(str) {
    /* Pass regExp w/ global case-insensitive modifier &
     * anon function to replace();
     * regExp is search pattern;
     * function is elaborate replace pattern.   */
    str = str.replace(/[a-z]/gi, function (char) {
        /* fromCharCode() returns string created via indicated
         * unicode values;
         * charCodeAt() returns unicode of char at specified index.
         * So char is assigned string at index after current char. */
        char = String.fromCharCode(char.charCodeAt(0) + 1);
        /* First if statement ensures that if char at index + 1 is
         * outside alpha range, a is assigned. */
        if (char == '{' || char == '[') char = 'a';
        /* Second if statement converts vowels to uppercase.
         * Result is passed to replace() function, returning result
         * to original call.    */
        if (/[aeiuo]/.test(char)) char = char.toUpperCase();
        return char;
    });
    return str;
}
var str = 'Zsa Zsa Gabor';
console.log(LetterChanges(str)); //Atb Atb Hbcps