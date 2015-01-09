/* Create an Employee() constructor function with days_worked,
 * vacation_days_per_year, and vacation_days_taken properties.
 * Add a vacation_days_left() method that returns the number
 * of vacation days the employee has remaining.  */
function Employee(days_worked, vacation_days_per_year, vacation_days_taken) {
    this.days_worked = days_worked;
    this.vacation_days_per_year = vacation_days_per_year;
    this.vacation_days_taken = vacation_days_taken;
    this.vacation_days_left = function() {
        return (this.days_worked/365 * (vacation_days_per_year - vacation_days_taken));

    }
}

var fosdick = new Employee(120, 40, 17);
console.log(fosdick.vacation_days_left());