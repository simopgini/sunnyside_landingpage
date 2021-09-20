const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

let menuButtonClicked = false;

menuButton.addEventListener("click", function (event) {
  // invert menuButtonClicked value
  if (menuButtonClicked) {
    menuButtonClicked = false;
  } else {
    menuButtonClicked = true;
  }

  // same thing but smarter
  // menuButtonClicked = !menuButtonClicked;

  // add or remove visible class to menu based on menuButtonClicked value
  if (menuButtonClicked) {
    menu.className = "menu visible";
  } else {
    menu.className = "menu";
  }
});
