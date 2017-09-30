import setTemplateToNode from './getElement.js';
import setScreen from './setScreen.js';
import welcomeScreen from './welcome.js';

const resultFailAttemptTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultFailAttemptScreen = setTemplateToNode(resultFailAttemptTemplate);

const tryAgainButton = resultFailAttemptScreen.querySelector(`.main-replay`);

tryAgainButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  setScreen(welcomeScreen);
});

export default resultFailAttemptScreen;
