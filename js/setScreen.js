const mainNode = document.querySelector(`.main`);

const setScreen = (view) => {
  mainNode.innerHTML = ``;

  mainNode.appendChild(view.element);
};

export default setScreen;
