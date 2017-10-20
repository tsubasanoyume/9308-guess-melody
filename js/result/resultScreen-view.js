import AbstractView from '../abstractView.js';
import getResultText from '../getResultText.js';
import {statistics} from '../data/data.js';

export default class ResultScreenView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    const resultText = getResultText(statistics, this.game);
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${resultText.title}</h2>
    <div class="main-stat">${resultText.stat}</div>
    ${resultText.comparison || ``}
    <span role="button" tabindex="0" class="main-replay">${resultText.button}</span>
  </section>`;
  }

  bind() {
    const tryAgainButton = this.element.querySelector(`.main-replay`);

    tryAgainButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      this.onRepeat();
    });
  }

  onRepeat() {

  }
}
