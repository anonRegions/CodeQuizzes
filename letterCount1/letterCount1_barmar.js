str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium lobortis arcu, eget rhoncus est commodo sit amet";

function charFreq(s) {
    var i, j;
    var a = new Array();

    for (j = 0; j < s.length; j++) {
        for (i = 0; i < a.length; i++) {
            if (a[i][0] == s[j]) {
                a[i][1]++;
                break;
            }
        }

        if (i == a.length) {

            a[i] = [s[j], 1];
        }
    }

    return a;
}
var all_words = str.split(' ');
var all_freq = all_words.map(charFreq);
var max_freq = 0;
var max_word;
for (var i = 0; i < all_freq.length; i++) {
    for (j = 0; j < all_freq[i].length; j++) {
        if (all_freq[i][j][1] > max_freq) {
            max_freq = all_freq[i][j][1];
            max_word = i;
        }
    }
}
document.getElementById("result").innerHTML = all_words[max_word];