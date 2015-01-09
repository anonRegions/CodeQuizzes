/* Create a Circle() constructor function to make circle objects
 * with an area method. Add a private PI variable to the circle
 * objects that are created a set its value equal to 3.14.
 *
function Circle() {
    this.area = function (r) {
        var PI = 3.14;
        return (PI * r * r);
    }
}
var r;
*/
//Another way to do it:
function Circle(radius) {
    var PI = 3.14;
    this.radius = radius;
    this.area = function () { return PI * Math.pow(this.radius, 2) };
}

var my_circle = new Circle(5);
console.log(my_circle.area());

/*
var myCircle = new Circle();
console.log(myCircle.area(4));
*/