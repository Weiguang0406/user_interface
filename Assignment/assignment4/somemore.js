// Weiguang Yang

// Exercise_1:

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages2 = new Array();
const populations = [1440, 38, 331, 67];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(parseFloat(percentageOfWorld1(populations[i])).toFixed(2));
}
console.log(percentages2);

// The result is same, for loop provide more efforless work than calculate one by one;

// Exercise_2:

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let e = 0; e < listOfNeighbours[i].length; e++)
    console.log(`Neighbor: ${listOfNeighbours[i][e]}`);
}

// exercise_3: Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.
// It should return the sum of all the numbers in the array.

const sumArray = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101

// Exercise 4:
// Please write a function called lastElement which accepts a single array argument.
//  The function should return the last element of the array (without removing the element).
// If the array is empty, the function should return null.

const lastElement = function (array) {
  return array.length > 0 ? array[array.length - 1] : "null";
};

console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null
