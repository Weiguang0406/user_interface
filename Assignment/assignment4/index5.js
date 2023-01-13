// Make a rainbow:

// define colors using an array:
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const elemSpan = document.querySelectorAll("span");
console.log(elemSpan);
// assign the colors to each span element and change the element to be blocks:
for (let i = 0; i < colors.length; i++) {
  elemSpan[i].style.display = "block";
  elemSpan[i].style.backgroundColor = colors[i];
}

// ----end----
