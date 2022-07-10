// determines which sound to play for which key press
const makeSound = (key) => {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "k":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    default:
      console.log(key);
      console.log('This key has no sound associated with it.')
      break;
  }
};

// adding a class pressed on drum click
const animation = (key) => {
  const drum = document.querySelector(`.${key}`);
  if (drum != null) {
    drum.classList.add("pressed");
    setTimeout(() => {
      drum.classList.remove("pressed");
    }, 300);
  }
};

// event listener for keyboard press
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  animation(event.key);
});

// event listener for click on drums
document.querySelectorAll(".drum").forEach((drum) => {
  drum.addEventListener("click", () => {
    makeSound(drum.innerText);
    animation(drum.innerText);
  });
});
