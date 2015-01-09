// Created by Ethan on 11/12/2014.
var chevy = {
    make: "Chevrolet",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    transmission: "manual",
    driveType: "rear wheel"
};

var cadi = {
    make: "Cadillac",
    model: "El Dorado",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 17588,
    transmission: "automatic",
    driveType: "rear wheel"
};

var fiat = {
    make: "Fiat",
    model: "600",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    transmission: "manual",
    driveType: "rear wheel"
};

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
console.log(chevy);
console.log(cadi);
console.log(fiat);