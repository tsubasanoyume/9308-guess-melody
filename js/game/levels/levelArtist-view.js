import AbstractView from '../../abstractView.js';
import HeaderView from '../header/header-view.js';
import {Result} from '../../data/Constants.js';
import getPoints from '../../getPoints.js';
import {stats, getLevel, setNextLevel} from '../../data/data.js';

const answerNode = (answers) => `${[...answers].map((answer, i) => `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
            <label class="main-answer" for="answer-${i + 1}">
              <img class="main-answer-preview" src="${answer.imageSRC}"
                   alt="${answer.nameArtist}" width="134" height="134">
              ${answer.nameArtist}
            </label>
          </div>`).join(``)}`;

export default class LevelArtistView extends AbstractView {
  constructor(game, level, model) {
    super();
    this.level = level;
    this.game = game;
    this.model = model;
  }

  get template() {
    const header = new HeaderView(this.game);
    return `<section class="main main--level main--level-artist">

    ${header.template}

    <div class="main-wrap">
      <h2 class="title main-title">${this.model.data[`state-` + this.level].question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.model.data[`state-` + this.level].srcAudio}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
       ${answerNode(this.model.data[`state-` + this.level].answers)}
      </form>
    </div>
  </section>`;
  }

  bind() {
    const playButton = this.element.querySelector(`.player-control`);
    const audioNode = this.element.querySelector(`audio`);

    playButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      if (playButton.classList.contains(`player-control--pause`)) {
        playButton.classList.remove(`player-control--pause`);
        playButton.classList.add(`player-control--play`);
        audioNode.pause();
      } else {
        playButton.classList.remove(`player-control--play`);
        playButton.classList.add(`player-control--pause`);
        audioNode.play();
      }
    });

    const radioButtons = this.element.querySelectorAll(`.main-answer-r`);
    const answers = this.model.data[`state-` + this.game.level].answers;

    const rightAnswerIndex = answers.findIndex((el) => el.isRight);

    [...radioButtons].forEach((item, i) => {
      item.addEventListener(`change`, (e) => {
        e.preventDefault();
        if (item.checked) {
          if (i === rightAnswerIndex) {
            this.onAnswer(getLevel(setNextLevel(this.game), this.model.data) ? Result.NEXT : Result.WIN);
          } else {
            let result = Result.DIE;
            if (this.game.lives <= 0 || this.game.time <= 0) {
              this.game.points = getPoints(stats, this.game.lives);
              result = Result.FAIL;
            }
            this.onAnswer(result);
          }
        }
      });
    });
  }

  static onAnswer(answer) {
    return answer;
  }

}
