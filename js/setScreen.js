const mainNode = document.querySelector(`.app`);

function setScreen(screen) {
  mainNode.innerHTML = ``;

  mainNode.appendChild(screen);
}

export default setScreen;
