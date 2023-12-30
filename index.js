const drums = document.querySelectorAll(".drum");

const playSound = (link) => {
  const sound = new Audio(link);
  sound.play();
};

const addActiveClass = (el) => {
  el.classList.add("pressed");

  const activeBtnTimer = setTimeout(() => {
    el.classList.remove("pressed");
  }, 100);
};

const chooseAndPlaySound = (pressedKey) => {
  const key = pressedKey?.toLowerCase();
  switch (key) {
    case "d":
      playSound("./sounds/tom-1.mp3");
      break;
    case "f":
      playSound("./sounds/tom-2.mp3");
      break;
    case "g":
      playSound("./sounds/tom-3.mp3");
      break;
    case "h":
      playSound("./sounds/tom-4.mp3");
      break;
    case "j":
      playSound("./sounds/snare.mp3");
      break;
    case "k":
      playSound("./sounds/kick-bass.mp3");
      break;
    case "l":
      playSound("./sounds/crash.mp3");
      break;

    default:
      console.log("Invalid key");
      break;
  }
};

document.addEventListener("keydown", (e) => {
  const clickedKey = e.key;
  if (!clickedKey) return;
  chooseAndPlaySound(clickedKey);
  const el = document.querySelector(`.${clickedKey}`);
  if (!el) return;
  addActiveClass(el);
});

drums.forEach((drum) => {
  drum.addEventListener("click", (e) => {
    const key = e.target.innerText;
    chooseAndPlaySound(key);
    addActiveClass(e.target);
  });
});
