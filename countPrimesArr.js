function countPrimesArr(a, num) {
    var primes = [];
    //Values where array[i] == true are pushed to primes
    for (var i = 2; i < a.length; i++) {
        if(a[i] !== 0) primes.push(i);
    }
    return primes[num];
}
var num = 8;
var a = [ 0, 1, 2, 3, 0, 5, 0, 7, 0, 0, 0, 11, 0, 13, 0, 0, 0, 17, 0, 19, 0, 0, 0, 23, 0, 0, 0, 0, 0, 29, 0, 31, 0, 0, 0, 0, 0, 37, 0, 0, 0, 41, 0, 43, 0, 0, 0, 47, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 0, 59, 0, 61, 0, 0, 0, 0, 0, 67, 0, 0, 0, 71, 0, 73, 0, 0, 0, 0, 0, 79, 0, 0, 0, 83, 0, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 101, 0, 103, 0, 0, 0, 107, 0, 109, 0, 0, 0, 113, 0, 0, 0, 0, 0, 0, 0, 121, 0, 0, 0, 0, 0, 127, 0, 0, 0, 131, 0, 0, 0, 0, 0, 137, 0, 139, 0, 0, 0, 143, 0, 0, 0, 0, 0, 149, 0, 151, 0, 0, 0, 0, 0, 157, 0, 0, 0, 0, 0, 163, 0, 0, 0, 167, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 0, 179, 0, 181, 0, 0, 0, 0, 0, 187, 0, 0, 0, 191, 0, 193, 0, 0, 0, 197, 0, 199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 209, 0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 223, 0, 0, 0, 227, 0, 229, 0, 0, 0, 233, 0, 0, 0, 0, 0, 239, 0, 241, 0, 0, 0, 0, 0, 247, 0, 0, 0, 251, 0, 253, 0, 0, 0, 257, 0, 0, 0, 0, 0, 263, 0, 0, 0, 0, 0, 269, 0, 271, 0, 0, 0, 0, 0, 277, 0, 0, 0, 281, 0, 283, 0, 0, 0, 0, 0, 289, 0, 0, 0, 293, 0, 0, 0, 0, 0, 299, 0, 0, 0, 0, 0, 0, 0, 307, 0, 0, 0, 311, 0, 313, 0, 0, 0, 317, 0, 319, 0, 0, 0, 323, 0, 0, 0, 0, 0, 0, 0, 331, 0, 0, 0, 0, 0, 337, 0, 0, 0, 341, 0, 0, 0, 0, 0, 347, 0, 349, 0, 0, 0, 353, 0, 0, 0, 0, 0, 359, 0, 361, 0, 0, 0, 0, 0, 367, 0, 0, 0, 0, 0, 373, 0, 0, 0, 377, 0, 379, 0, 0, 0, 383, 0, 0, 0, 0, 0, 389, 0, 391, 0, 0, 0, 0, 0, 397, 0, 0, 0, 401, 0, 403, 0, 0, 0, 407, 0, 409, 0, 0, 0, 0, 0, 0, 0, 0, 0, 419, 0, 421, 0, 0, 0, 0, 0, 0, 0, 0, 0, 431, 0, 433, 0, 0, 0, 437, 0, 439, 0, 0, 0, 443, 0, 0, 0, 0, 0, 449, 0, 451, 0, 0, 0, 0, 0, 457, 0, 0, 0, 461, 0, 463, 0, 0, 0, 467, 0, 0, 0, 0, 0, 473, 0, 0, 0, 0, 0, 479, 0, 481, 0, 0, 0, 0, 0, 487, 0, 0, 0, 491, 0, 493, 0, 0, 0, 0, 0, 499, 0, 0, 0, 503, 0, 0, 0, 0, 0, 509, 0, 0, 0, 0, 0, 0, 0, 517, 0, 0, 0, 521, 0, 523, 0, 0, 0, 527, 0, 529, 0, 0, 0, 533, 0, 0, 0, 0, 0, 0, 0, 541, 0, 0, 0, 0, 0, 547, 0, 0, 0, 551, 0, 0, 0, 0, 0, 557, 0, 559, 0, 0, 0, 563, 0, 0, 0, 0, 0, 569, 0, 571, 0, 0, 0, 0, 0, 577, 0, 0, 0, 0, 0, 583, 0, 0, 0, 587, 0, 589, 0, 0, 0, 593, 0, 0, 0, 0, 0, 599, 0, 601, 0, 0, 0, 0, 0, 607, 0, 0, 0, 611, 0, 613, 0, 0, 0, 617, 0, 619, 0, 0, 0, 0, 0, 0, 0, 0, 0, 629, 0, 631, 0, 0, 0, 0, 0, 0, 0, 0, 0, 641, 0, 643, 0, 0, 0, 647, 0, 649, 0, 0, 0, 653, 0, 0, 0, 0, 0, 659, 0, 661, 0, 0, 0, 0, 0, 667, 0, 0, 0, 671, 0, 673, 0, 0, 0, 677, 0, 0, 0, 0, 0, 683, 0, 0, 0, 0, 0, 689, 0, 691, 0, 0, 0, 0, 0, 697, 0, 0, 0, 701, 0, 703, 0, 0, 0, 0, 0, 709, 0, 0, 0, 713, 0, 0, 0, 0, 0, 719, 0, 0, 0, 0, 0, 0, 0, 727, 0, 0, 0, 731, 0, 733, 0, 0, 0, 737, 0, 739, 0, 0, 0, 743, 0, 0, 0, 0, 0, 0, 0, 751, 0, 0, 0, 0, 0, 757, 0, 0, 0, 761, 0, 0, 0, 0, 0, 767, 0, 769, 0, 0, 0, 773, 0, 0, 0, 0, 0, 779, 0, 781, 0, 0, 0, 0, 0, 787, 0, 0, 0, 0, 0, 793, 0, 0, 0, 797, 0, 799, 0, 0, 0, 803, 0, 0, 0, 0, 0, 809, 0, 811, 0, 0, 0, 0, 0, 817, 0, 0, 0, 821, 0, 823, 0, 0, 0, 827, 0, 829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 839, 0, 841, 0, 0, 0, 0, 0, 0, 0, 0, 0, 851, 0, 853, 0, 0, 0, 857, 0, 859, 0, 0, 0, 863, 0, 0, 0, 0, 0, 869, 0, 871, 0, 0, 0, 0, 0, 877, 0, 0, 0, 881, 0, 883, 0, 0, 0, 887, 0, 0, 0, 0, 0, 893, 0, 0, 0, 0, 0, 899, 0, 901, 0, 0, 0, 0, 0, 907, 0, 0, 0, 911, 0, 913, 0, 0, 0, 0, 0, 919, 0, 0, 0, 923, 0, 0, 0, 0, 0, 929, 0, 0, 0, 0, 0, 0, 0, 937, 0, 0, 0, 941, 0, 943, 0, 0, 0, 947, 0, 949, 0, 0, 0, 953, 0, 0, 0, 0, 0, 0, 0, 961, 0, 0, 0, 0, 0, 967, 0, 0, 0, 971, 0, 0, 0, 0, 0, 977, 0, 979, 0, 0, 0, 983, 0, 0, 0, 0, 0, 989, 0, 991, 0, 0, 0, 0, 0, 997, 0, 0, 0 ];
console.log(countPrimesArr(a, num));