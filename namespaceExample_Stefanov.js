// by Stoyan Stefanov

/** My js app
 *
 * @module myapp     */

/** @namespace Namespace for MYAPP classes and functions. */
var MYAPP = MYAPP || {};

/** A maths utility
 * @namespace MYAPP
 * @class math_stuff     */
MYAPP.math_stuff = {

    /** Sums 2 numbers
     *
     * @method sum
     * @param {Number} a First number
     * @param {Number} b Second number
     * @return {Number} Sum of the inputs        */
    sum: function (a, b) {
        return a + b;
    },

    /** Multiplies 2 numbers
     *
     * @method multi
     * @param {Number} a First number
     * @param {Number} b Second number
     * @return {Number} The inputs multiplied        */
    multi: function (a, b) {
        return a * b;
    }
};

/** Constructs Person objects
 * @class Person
 * @constructor
 * @namespace MYAPP
 * @param {String} First name
 * @param {String} Last name     */
MYAPP.Person = function (first, last) {

    /** First name of the Person
     * @property first_name
     * @type String      */
    this.first_name = first;

    /** Last name of the Person
     * @property last_name
     * @type String      */
    this.last_name = last;
};

/** Return Person's full name
 *
 * @method getName
 * @return {String} First name + last name   */
MYAPP.Person.prototype.getName = function () {
    return this.first_name + ' ' + this.last_name;
};