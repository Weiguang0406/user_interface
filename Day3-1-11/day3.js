// Array:
var dogs = ["Bulldog", "Beagle", "Labrador"];
var dogs = new Array("Bulldog", "Beagle", "Labrador"); // declaration

// alert(dogs[1]); // access value at index, first item being [0]
dogs[0] = "Bull Terier"; // change the first item

for (var i = 0; i < dogs.length; i++) {
  // parsing with array.length
  console.log(dogs[i]);
}

dogs.toString(); // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * "); // join: "Bulldog * Beagle * Labrador"
dogs.pop(); // remove last element
dogs.push("Chihuahua"); // add new element to the end
dogs[dogs.length] = "Chihuahua"; // the same as push
dogs.shift(); // remove first element
dogs.unshift("Chihuahua"); // add new element to the beginning
delete dogs[0]; // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer"); // add elements (where, how many to remove, element list)
// var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)
dogs.slice(1, 4); // elements from [1] to [4-1]
dogs.sort(); // sort string alphabetically
dogs.reverse(); // sort string in descending order
dogs.sort(function (a, b) {
  return a - b;
}); // numeric sort
dogs.sort(function (a, b) {
  return b - a;
}); // numeric descending sort
highest = dogs[0]; // first item in sorted array is the lowest (or highest) value
dogs.sort(function (a, b) {
  return 0.5 - Math.random();
}); // random order sort

dogs.includes("Chihuahua");

// Exercise1:
// 1.1
let neighbours = new Array(
  "Russia",
  "North Korea",
  "Vietnam",
  "Myanmar (Burma)",
  "India",
  "Pakistan",
  "Afghanistan"
);
// 1.2
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
// 1.3
console.log(
  neighbours.includes("Germany")
    ? `It's a central Eurppean contry`
    : `Probably not a central European contry`
);
// 1.4
let indexToReplace = neighbours.indexOf("Vietnam");
neighbours[indexToReplace] = "Laos";

console.log(neighbours);

// test:

console.log(neighbours.join(" * "));
console.log(neighbours.toString());
console.log(neighbours.sort());

// Object: Objects are variables too. But objects can contain many values.

const car = { type: "Fiat", model: "500", color: "white" };

console.log(car);
console.log(car.color);
console.log(car.model);
let interestedIn = prompt("What's your intest? ");
const DannyObj = {
  firstName: "Danny",
  lastName: "Yang",
  age: 38,
  job: "Technical Support Engineer",
  professions: ["teaching", "java", "GCP"],
  friends: ["Samantha", "Steven", "David"],
  birthyear: 1984,
  interestedIn,
  calAge: function () {
    return new Date().getFullYear() - this.birthyear;
  },
};
console.log(DannyObj.interestedIn);
console.log(DannyObj.calAge());
// Exercise2: object:

const myCountry = {
  country: "China",
  capital: "beijing",
  language: "Mandarin",
  population: "1400mi",
  neighbours,
};

console.log(myCountry);
console.log(myCountry.neighbours);
let namekey = "Name";
console.log(DannyObj["first" + namekey]);
// Prompt:

let country = prompt("What's your country: ");
const myCountry2 = {
  country: "China",
  capital: "beijing",
  language: "Mandarin",
  population: "1400mi",
  neighbours,
};

console.log(DannyObj.interestedIn);

// if (DannyObj[interestedIn]) {
//   console.log(DannyObj.interestedIn);
// } else {
//   interestedInprompt;
// }

DannyObj.school = "JohnAbbot";

console.log(
  `Danny has ${DannyObj.friends.length} friends and his best friend is ${DannyObj.friends[0]}`
);

// object:

const employee1 = {
  employeeID: 12313,
  salary: 2000000,
  isManager: function (salary) {
    if (salary > 150000) {
      return "Is manager.";
    }
  },
};
console.log(employee1.salary);
console.log(employee1.isManager(500000));

const DannyObj2 = {
  firstName: "Danny",
  lastName: "Yang",
  birthYear: 1985,
  calAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
  job: "Tech Support Engineer",
  hasDriverLicense: true,
};

console.log(
  `${DannyObj.firstName} is a ${DannyObj.calAge()} year old ${
    DannyObj.job
  } and ${
    this.hasDriverLicense ? "has driver license" : "doesn't have license"
  }.`
);

// Loop:

for (let i = 1; i <= 30; i++) {
  console.log(`Lifting weight ${i}!`);
}

let types = [];
let Danny = [];
let danny2 = [];

console.log(types);
console.log(Danny);
// myobj[Object.keys(myobj)[0]];   Get Object index

for (let i = 0; i < Object.keys(DannyObj2).length; i++) {
  types.push(typeof DannyObj2[Object.keys(DannyObj2)[i]]);
  Danny.push(DannyObj2[Object.keys(DannyObj2)[i]]);
  danny2.push(Object.keys(DannyObj2)[i]);
}

console.log(types);
console.log(Danny);
console.log(danny2);
