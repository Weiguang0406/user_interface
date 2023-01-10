// Weiguang Yang 1995991

// a:
// 1.Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
// 2.Log their values to the console

const contry = "China";
const continent = "Asia";
let population = 1400;

console.log(
  `${contry} is in ${continent} which has population of ${population} million.`
);

// B:
// 1.Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
// 2.Log their values to the console

let isiland;
const language = "Mandarin";
isiland = false;

console.log(typeof isiland);
console.log(typeof population);
console.log(typeof contry);
console.log(typeof language);

// C:
// 1.Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2.Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3.Try to change one of the changed variables now, and observe what happens

// language = "English";
// Unable to reassign the value of const;

// D:
// 1.If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2.Increase the population of your country by 1 and log the result to the console
// 3.Finland has a population of 6 million. Does your country have more people than Finland?
// 4.Finland has a population of 6 million. Does your country have more people than Finland?
// 5.Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// half of the population:
console.log(`half of the population of ${contry} is ${population / 2}`);

let populationofFinland = 6;
if (population > populationofFinland) {
  console.log(`${contry} has more people than Finland`);
} else if (population < populationofFinland) {
  console.log(`Finland has more people than ${contry}`);
} else {
  console.log(`${contry} has same population as Finland`);
}

let description =
  "1. " +
  contry +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description);

// E:
// . Recreate the 'description' variable from the last assignment, this time using the template literal syntax

description = `2. ${contry} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);

// F:

// Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// Execute the operations to check if you were right

// Predition:
// '9' - '5';             -> 4
// '19' - '13' + '17';    ->617
// '19' - '13' + 17;      ->23
// '123' < 57;            -> false
// 5 + 6 + '4' + 9 - 4 - 2; -> 117

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2); // The right answer should be 1143, because (5 + 6 + "4" +9)  equals 1149 which is treated as a string

// F:
// 1.Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2.If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3.Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4.Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5.Test the code with different values of 'numNeighbours', including 1 and 0.
// 6.Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7.Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8.Reflect on why we should use the === operator and type conversion in this situation

let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

// When using "===" it check not only the value but also the type of the data, the input "numNeighbor" is a string, that's why when input is 1, it still shows "No borders";
// So we need to convert the input to number, then compare them;
if (Number(numNeighbours) === 1) {
  console.log("Only 1 border!");
} else if (Number(numNeighbours) > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// G:

// 1.. Comment out the previous code so the prompt doesn't get in the way
// 2.Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3.Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4.If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5.Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

if (language === "English" && (population < 50) & (isiland === false)) {
  console.log(`Hi, Sarah, you should live in ${contry} :)`);
} else {
  console.log(`Hi Sarah, ${contry} does not meet your criteria :(`);
}

// H: Challenge

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolScore = [96, 108, 89];
let koaScore = [88, 91, 110];

let dolSum = dolScore.reduce((a, b) => a + b, 0);
let dolAverage = dolSum / dolScore.length;
console.log(dolSum);
console.log(dolAverage);

let koaSum = koaScore.reduce((a, b) => a + b, 0);
let koaAverage = koaSum / koaScore.length;

console.log(koaSum);
console.log(koaAverage);

if (dolAverage > koaAverage) {
  console.log(`Team Dolphins(${dolAverage}) is the WINNER!`);
} else if (dolAverage < koaAverage) {
  console.log(`Team Koala(${koaAverage}) is the WINNER!`);
} else {
  console.log(`Team Dolphins and Team Koala are tied!`);
}

// Bonus 1:
const minScore = 100;
let dolScoreBon1 = [97, 112, 101];
let koaScoreBon1 = [109, 95, 123];

let dolSumBon1 = dolScoreBon1.reduce((a, b) => a + b, 0);
let dolAverageBon1 = dolSumBon1 / dolScore.length;
let koaSumBon1 = koaScoreBon1.reduce((a, b) => a + b, 0);
let koaAverageBon1 = koaSumBon1 / koaScore.length;

if (dolAverageBon1 > koaAverageBon1 && dolAverageBon1 > minScore) {
  console.log(`Team Dolphins(${dolAverageBon1}) is the WINNER!`);
} else if (dolAverageBon1 < koaAverageBon1 && koaAverageBon1 > minScore) {
  console.log(`Team Koala(${koaAverageBon1}) is the WINNER!`);
} else {
  console.log(`Team Dolphins and Team Koala are draw`);
}

// Bonus 2:
let dolScoreBon2 = [97, 112, 101];
let koaScoreBon2 = [109, 95, 106];

let dolSumBon2 = dolScoreBon2.reduce((a, b) => a + b, 0);
let dolAverageBon2 = dolSumBon2 / dolScore.length;
let koaSumBon2 = koaScoreBon2.reduce((a, b) => a + b, 0);
let koaAverageBon2 = koaSumBon2 / koaScore.length;

if (dolAverageBon2 > koaAverageBon2 && dolAverageBon2 >= minScore) {
  console.log(`Team Dolphins(${dolAverageBon2}) is the WINNER!`);
} else if (dolAverageBon2 < koaAverageBon2 && koaAverageBon2 >= minScore) {
  console.log(`Team Koala(${koaAverageBon2}) is the WINNER!`);
} else if (dolAverageBon2 === koaAverageBon2 && dolAverageBon2 >= minScore) {
  console.log(`Team Dolphins and Team Koala are draw`);
} else {
  console.log("No Team wins the trophy.");
}
