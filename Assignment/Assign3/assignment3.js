// Weiguang Yang 1995991

// Exercise_1:
console.log("\n" + "Exercise_1: " + "\n\n");
// Calculate tips
const calTip = (billMount) => {
  let tip =
    billMount >= 50 && billMount <= 300 ? billMount * 0.15 : billMount * 0.2;
  return tip;
};

// Put all tips into an array;
let bills = [125, 555, 44];
let tips = new Array();

for (let i = 0; i < bills.length; i++) {
  tips.push(calTip(bills[i]));
}

console.log(tips);

// add element into html page:
const tipsPara = document.createElement("p");
tipsPara.innerText = `The tips are : ${tips.toString()}.`;
document.body.appendChild(tipsPara);

// Calculate total bill amount(including tips):
let total = new Array();
for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + calTip(bills[i]));
}

console.log(total);

// Exercise 2:
console.log("\n" + "Exercise_2: " + "\n\n");
// Create 2 objects:
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

// Calculate BMI calculator and compare the BMI:

console.log(
  markMiller.calcBMI() > johnSmith.calcBMI()
    ? `${markMiller.fullName}'s BMI(${markMiller.calcBMI()}) is higer than ${
        johnSmith.fullName
      }'s (${johnSmith.calcBMI()})`
    : `${johnSmith.fullName}'s BMI(${johnSmith.calcBMI()}) is higer than ${
        markMiller.fullName
      }'s (${markMiller.calcBMI()})`
);

// Exercise_3:
console.log("\n" + "Exercise_3: " + "\n\n");
// create an object:
const myCountry = {
  contry: "China",
  continent: "Asia",
  population: 1400,
  language: "Mandarin",
  neighbours: [
    "Russia",
    "North Korea",
    "Vietnam",
    "Myanmar (Burma)",
    "India",
    "Pakistan",
    "Afghanistan",
  ],
  describe: function () {
    return (
      this.contry +
      " is in " +
      this.continent +
      ", and it has " +
      this.population +
      " million people speaking " +
      this.language
    );
  },
  checkIsland: function () {
    return this.neighbours.length >= 1 ? "true" : "false";
  },
  // isIsland: this.checkIsland(),
};
//
myCountry.isIsland = myCountry.checkIsland();
console.log(myCountry.describe());
console.log(myCountry.isIsland);

// Exercise_4: Election
console.log("\n" + "Exercise_4: " + "\n\n");
// For loop
for (let num = 1; num <= 50; num++) {
  console.log(`Voter number ${num} is currently voting.`);
}
