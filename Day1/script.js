// alert("Hello");
console.log("BMI");
document.querySelector("h1").innerHTML = "BMI Challenge";

// let fname, mass, height;
// fname = prompt("enter your first name:");
// mass = prompt("Enter mass in Kg:");
// height = prompt("Enter height in meter:");
// // using backtick ``
// console.log(`${fname} + ", Your BMI is " + Math.round(${mass} / ${height} ** 2)`);

// break lines

console.log("qhdhkjhkdjkakggdhg \nsjdhkjgkghsdgjh \nhljsdjkhkj");
console.log(`hasjhdkjashdkjash
shdkjaashkjh
skdjlklhj`);

// get content of a string
const mySong = "asjdkhkjgAKSHH";
console.log(mySong[0]);

// Bigint
let hugenum = BigInt(54564345454245424);
console.log(typeof hugenum);
console.log(typeof askjhdkajsh);

let nullExample = null;
console.log(nullExample);
console.log(typeof nullExample);

// comparing strings:
let a = "g";
let b = "f";

// ==  vs ===
// ==: doesn't check type; automatically convert them to same type and then compare them;
// ===: check the type and value;

const c = "12";
const d = 12;

// String Practice:
// 1. Print a nice output to the console, saying who has the higher BMI.
//  The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.
//  Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
let markHigherBmi = bmiMark > bmiJohn;
bmiMark_round = bmiMark.toFixed(1);
bmiJohn_round = bmiJohn.toFixed(1);

// console.log("Mark BMI is " + bmiMark);
// console.log("John BMI is " + bmiJohn);
// console.log("Mark BMI is greater than than John's: " + markHigherBmi);

// if (markHigherBmi == true) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else if (markHigherBmi == false) {
//   console.log("John's BMI is higher than Mark's!");
// } else {
//   ("John's BMI is same as Mark's!");
// }

console.log(`Mark's BMI is  ${bmiMark_round}`);
console.log(`John's BMI is  ${bmiJohn_round}`);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else if (bmiJohn > bmiMark) {
  console.log("John's BMI is higher than Mark's!");
} else {
  ("John's BMI is same as Mark's!");
}

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI(${bmiMark_round}) is higher than John's(${bmiJohn_round})!`
  );
} else if (bmiJohn > bmiMark) {
  console.log(
    `John's BMI(${bmiJohn_round}) is higher than Mark's(${bmiMark_round})!`
  );
} else {
  `John's BMI(${bmiJohn_round}) is same as Mark's(${bmiMark_round})!`;
}

// Convert data type:  --- Javascript is a dynamic language;

const year = "1995";
console.log(year + 18);
console.log(Number(year) + 18);
console.log(Number("not a number"));

// type coercion:
// "- * / %"it will convert into mathmatic function;

console.log("10" - "25" - 10);

let n = "30" + 1;
n = n - 2;
console.log(n);
console.log(typeof n);

// single quote

console.log("I'm a teacher.");
console.log("I'm a teacher.");
console.log(`I'm a teacher.`);

// Math object;
let t = "name";
console.log(t.replace("n", "b"));

const s = "name";
console.log(s.replace("n", "b"));
// s can't be changed / reassigned;
// s = s.replace("a", "b");
console.log(s);

// Current date:
console.log(new Date());

// boolean
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.
// That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean());
console.log(Boolean(0n));

// Example: to check if the value is exist;
// let address = prompt("Please enter your address: ");

// while (Boolean(address) == false) {
//   address = prompt(
//     "You didn't enter your address, please enter your address: "
//   );
// }

// Assignment:

// if our contry's population is greater than 33 million, log "Portugal's population is above average".Otherqise log"Portugal's population is 22 million below average;
// after checking the result, change the population temporarily to 13 and then to 130, see the different result and set  the polulation to original;

// let contryName;
// let population;
// contryName = prompt("Please enter your contry name:");
// population = prompt("Please enter your contry's population in million:");

// // contryName = "China";
// // population = 1400;

// if (population > 33) {
//   console.log(`${contryName}'s population is above average.`);
// } else if (population < 33) {
//   let popu_difference = 33 - population;
//   console.log(`${contryName}'s population is ${popu_difference} below average`);
// } else {
//   console.log(`${contryName}'s population is on average.`);
// }

let isIland = Boolean("China");
console.log(isIland);
