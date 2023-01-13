//
//1. Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

document.getElementById("container").style.textAlign = "center";
//2. Select the image and use JavaScript to give it a width of 150px and a border radius of 50%
const image = document.querySelector("img");
console.log(image);
image.setAttribute("width", "150px");
image.style.borderRadius = "50%";

// Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.)

// ----------End------------
