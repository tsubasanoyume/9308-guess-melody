import setTemplateToNode from './getElement.js';
import setScreen from './setScreen.js';
import welcomeScreen from './welcome.js';

const resultFailTimeTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultFailTimeScreen = setTemplateToNode(resultFailTimeTemplate);

const tryAgainButton = resultFailTimeScreen.querySelector(`.main-replay`);

tryAgainButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  setScreen(welcomeScreen);
});

export default resultFailTimeScreen;
