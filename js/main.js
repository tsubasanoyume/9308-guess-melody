const templateNode = document.querySelector(`#templates`);
const gameScreenNodes = templateNode.content.querySelectorAll(`.main`);
const mainNode = document.querySelector(`.main`);
const screenArray = [];

const screens = [`main--welcome`, `main--level-genre`, `main--level-artist`];

gameScreenNodes.forEach((item) => {
  screens.forEach((el, i) => {
    if (item.classList.contains(screens[i])) {
      screenArray[i] = item;
    }
  });

  if (item.classList.contains(`main--result`)) {
    screenArray.push(item);
  }
});

let numScreen = 0;

function setScreen(screen) {
  mainNode.innerHTML = ``;

  mainNode.appendChild(screenArray[screen]);
}

setScreen(numScreen);

document.addEventListener(`keydown`, (e) => {

  if (e.altKey && e.keyCode === 37) {
    if (numScreen > 0) {
      setScreen(--numScreen);
    }
  }

  if (e.altKey && e.keyCode === 39) {
    if (numScreen <= 4) {
      setScreen(++numScreen);
    }
  }
});
