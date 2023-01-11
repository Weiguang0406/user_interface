("use strict");

function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}

function myNotStrictFunction() {
  return "I'm not strict.";
}

console.log(myStrictFunction());
console.log(myNotStrictFunction());

function fruitProcessor(appleNum, orangeNum) {
  return `Juice with ${appleNum} apples and ${orangeNum} oranges;`;
}

console.log(fruitProcessor(4, 6));

// Fucntion prac 1:

// Option 1:

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
}

let describeChina = describeCountry("China", 1400, "Beijing");
let describeCanada = describeCountry("Canada", 35, "Ottawa");
let describeUS = describeCountry("USA", 400, "Washinton DC");

console.log(describeChina, "\n", describeCanada, "\n", describeUS);
console.log(describeCanada);
console.log(describeUS);

// Option 2:

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
// }

// let country = prompt("Enter a county name");
// let population = prompt("Enter population");
// let capitalCity = prompt("Enter capital city: ");

// console.log(describeCountry(country, population, capitalCity));

//4- function declaration:

const calAge = function calAge(birthYear) {
  return new Date().getFullYear() - birthYear;
};

const Age = calAge(1984);
console.log(Age);

// Practice_ 3:

// const percentageOfWorld1 = function (country, population) {
//   return `${country} has ${population} million people, so it's about ${
//     (population / 7900) * 100
//   }% of the world population;`;
// };
const percentageOfWorld1 = (country, population) => {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population;`;
};

const percentageOfWorld1_china = percentageOfWorld1("China", 1400);
const percentageOfWorld1_Canada = percentageOfWorld1("Canada", 35);
const percentageOfWorld1_US = percentageOfWorld1("US", 400);

console.log(
  percentageOfWorld1_china,
  "\n",
  percentageOfWorld1_Canada,
  "\n",
  percentageOfWorld1_US
);

// function percentageOfWorld2(country, population) {
//   return `${country} has ${population} million people, so it's about ${
//     (population / 7900) * 100
//   }% of the world population;`;
// }

const percentageOfWorld2 = (country, population) => {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population;`;
};
const percentageOfWorld2_china = percentageOfWorld2("China", 1400);
const percentageOfWorld2_Canada = percentageOfWorld2("Canada", 35);
const percentageOfWorld2_US = percentageOfWorld2("US", 400);

console.log(
  percentageOfWorld1_china,
  "\n",
  percentageOfWorld1_Canada,
  "\n",
  percentageOfWorld1_US
);

// 5- Arrow Function

// const calAge3 = function calAge(birthYear) {
//   return new Date().getFullYear() - birthYear;
// };

const calAge3 = (birthYear) => {
  return new Date().getFullYear() - birthYear;
};

// const yearUntilRetire = function (birthYear, name) {
//   const age = new Date().getFullYear() - birthYear;
//   return `${name} is now ${age}, ${65 - age} years until retirement`;
// };

const yearUntilRetire = (birthYear, name) => {
  const age = new Date().getFullYear() - birthYear;
  return `${name} is now ${age}, ${65 - age} years until retirement`;
};

console.log(yearUntilRetire(1985, "Danny"));

// Practice 4:

//6 -Functions calling another funtion:

function cutPieces(fruit) {
  return fruit * 4;
}

function juiceProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `Juice is made with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges;`;
}

console.log(juiceProcessor(4, 5));

// Array:

const friend = ["Mike", "John", "Peter"];
const y = new Array();
console.log(friend);
y.push(5);

console.log(y);
// array can contain any types of items(string, numbers, array )
const testArray = ["string", 98 - 89, friend];

console.log(testArray);

// Practice 5:

const popultions = [1400, 35, 400, 45];

const percentageOfWorld = (population) => {
  return `${(population / 7900) * 100}%`;
};
let has4Items = popultions.length === 4;

console.log(has4Items);
console.log(percentageOfWorld(1400));
const percentages = [
  percentageOfWorld(popultions[0]),
  percentageOfWorld(popultions[1]),
  percentageOfWorld(popultions[2]),
  percentageOfWorld(popultions[3]),
];

console.log(percentages);
