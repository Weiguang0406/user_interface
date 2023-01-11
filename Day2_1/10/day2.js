let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan day");
    break;
  case "Tue":
    console.log("Work day");
    break;
  default:
    console.log("Not a valid day");
}

console.log(new Date().getDay()); // The getDay() method returns the weekday as a number between 0 and 6.
console.log(new Date().getDate()); //The getDay() method returns the day of a month.

// Prac1:  Use swtich statement to log the folloing string for the given language:

// let language = prompt("Please enter a language: ");
// switch (language) {
//   case "Mandarin":
//   case "Chinese": // different switch cases to use the same code.
//     console.log("Most number of native speakers;");
//     break;
//   case "Spanish":
//     console.log("2nd place in nukber of native speakers;");
//     break;
//   case "English":
//     console.log("3rd place;");
//     break;
//   case "Hindi":
//     console.log("Number4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken lanaguage;");
//     break;
//   default:
//     console.log("Great language, too.");
// }

// 2 ternary operator:  condition ? exprIfTrue : exprIfFalse
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

const age = 23;

if (age > 18) {
  console.log(`I can drink.`);
} else {
  console.log(`I cant drink.`);
}

age > 18 ? console.log(`I can drink`) : console.log(`I can't drink`);

// Pract _ 2:
// let country = prompt("Please enter a country name: ");
// let population = prompt("Please enter the population of the above country: ");
// let country = "China";
// let population = 13;

// population > 33
//   ? console.log(`${country}'s population (${population}) is above average;`)
//   : population < 33
//   ? console.log(`${country}'s population (${population}) is below average;`)
//   : console.log(`on average`);

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

//3-  Strick mode:
