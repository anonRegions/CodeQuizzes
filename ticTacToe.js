// Created by Ethan on 11/9/2014.
var userA = [], userB = [];
var grid = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]];
//Select next user
var nextUser = Math.random(1);
console.log(nextUser);
/* Has user selected three in a row, horiz/vert/diagonally?
   (Win defined as arr[0][0], arr[0][1], arr[0][2] OR
                   arr[1][0], arr[1][1], arr[1][2] OR
                   arr[2][0], arr[2][1], arr[2][2] OR
                   arr[0][0], arr[1][0], arr[2][0] OR
                   arr[0][1], arr[1][1], arr[2][1] OR
                   arr[0][2], arr[1][2], arr[2][2] OR
                   arr[0][0], arr[1][1], arr[2][2] OR
                   arr[0][2], arr[1][1], arr[2][0]
   If yes, user wins. Game over.
   If no, user selects box.
   Copy selection to user's array
   Compare user array to winning arrays

   Q: How can I do this without hard-coding the combinations?  */

// Repeat with next user