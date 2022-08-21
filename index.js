function decideSound(keyPressed) {
  var sound;

  switch (keyPressed) {
    case "W":
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "A":
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "S":
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "D":
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "J":
    case "j":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "K":
    case "k":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "L":
    case "l":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    default:
      console.log(keyPressed + " is Not a present in this drum set!");
  }
}

function animateButton(buttonKey) {
  var activeButton = document.querySelector("." + buttonKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 160);
}

// adding button "click" addEventListener to all the elements with with class drum
document.querySelectorAll(".drum").forEach((item, i) => {
  item.addEventListener("click", function () {
    var buttonPressed = this.innerHTML;
    decideSound(buttonPressed);
    animateButton(buttonPressed);
  });
});

// adding "keydown" event to the whole document so it listenes for any key presses on the keyboard..
document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  decideSound(keyPressed);
  animateButton(keyPressed);
});
