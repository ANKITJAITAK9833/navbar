// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleButton.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
