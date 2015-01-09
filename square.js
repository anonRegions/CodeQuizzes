// Created by Ethan on 11/11/2014.
/* Create a constructor function called Square() to create
 * square objects with a side property and a method to
 * calculate the area. Use the Square() function to create
 * a square object.  */
 function Square(side) {
 this.side = side;
 this.area = function () { return this.side * this.side };
 }

 var my_square = new Square(4);  // creates a square object
 my_square.area();  // returns 16
// my_square.side;  // returns 4