// Manipulating Attributes Practice
// Let's get some practice working with DOM element attributes. I've provided you with some very basic markup.
//1.  Please select the image element and: change its source to this url: https://devsprouthosting.com/images/chicken.jpg

const image = document.querySelector("img");
image.src = "https://devsprouthosting.com/images/chicken.jpg";

console.log(image);
// change its alt text to be "chicken"

image.alt = "chicken";
console.log(image.alt);

// Index html doesn't have html and body tag,live reload doesn't work, need to manually refresh the web page;
// ------End------
