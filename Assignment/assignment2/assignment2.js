// Weiguang Yang 1995991
// Exercise 1:
console.log("Exercise 1 result: ");
console.log("\n");
// --------Answer:---------
const calTip = (billMount) => {
  let tip =
    billMount >= 50 && billMount <= 300 ? billMount * 0.15 : billMount * 0.2;
  return tip;
};

let billMount1 = 275;
let billMount2 = 40;
let billMount3 = 430;

console.log(
  `The bill was ${billMount1}, the tip was ${calTip(
    billMount1
  )}, and the total value ${billMount1 + calTip(billMount1)}`
);
console.log(
  `The bill was ${billMount2}, the tip was ${calTip(
    billMount2
  )}, and the total value ${billMount2 + calTip(billMount2)}`
);
console.log(
  `The bill was ${billMount3}, the tip was ${calTip(
    billMount3
  )}, and the total value ${billMount3 + calTip(billMount3)}`
);

// Exercise 2:
console.log("\n");
console.log("Exercise 2 result: ");
console.log("\n");
// --------Answer:---------
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No Team wins!";
  }
}

console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));
