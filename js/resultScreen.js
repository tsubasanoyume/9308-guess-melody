import setTemplateToNode from './getElement.js';
import setScreen from './setScreen.js';
import getResultText from './getResultText.js';
import {defaultState, statistics} from './data/data.js';

const resultTemplate = (game) => {
  const resultText = getResultText(statistics, game);
  const temp = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${resultText.title}</h2>
    <div class="main-stat">${resultText.stat}</div>
    ${resultText.comparison || ``}
    <span role="button" tabindex="0" class="main-replay">${resultText.button}</span>
  </section>`;

  const resultScreen = setTemplateToNode(temp);

  const tryAgainButton = resultScreen.querySelector(`.main-replay`);

  tryAgainButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    setScreen(defaultState);
  });

  return resultScreen;
};

export default resultTemplate;
