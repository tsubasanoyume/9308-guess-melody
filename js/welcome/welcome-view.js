import AbstractView from '../abstractView.js';

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play hide">Начать игру</button>
    <div class="main-stat">Идет загрузка...</div>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`.trim();
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      this.onClick();
    });
  }

  onClick() {

  }
}
