import setTemplateToNode from './getElement.js';
import setScreen from './setScreen.js';
import {levels, stats, setNextLevel, setLives, gameStack} from './data/data.js';
import getHeader from './header.js';
import getPoints from './getPoints.js';

const answerNode = (answers) => `${[...answers].map((answer) => `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${answer.srcAudio}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="${answer.genre}" id="${answer.genre}">
          <label class="genre-answer-check" for="${answer.genre}"></label>
        </div>`).join(``)}`;

const lvlGenreTemplate = (game) => {
  const temp = `<section class="main main--level main--level-genre">
    ${getHeader(game)}

    <div class="main-wrap">
      <h2 class="title">${levels[`state-` + game.level].question}</h2>
      <form class="genre">
        ${answerNode(levels[`state-` + game.level].answers)}

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const lvlGenreScreen = setTemplateToNode(temp);

  const checkboxesAnswers = lvlGenreScreen.querySelectorAll(`input[name=answer]`);
  const sendButton = lvlGenreScreen.querySelector(`.genre-answer-send`);
  const answersContainer = lvlGenreScreen.querySelector(`.genre`);

  sendButton.disabled = true;
  const rightAnswer = levels[`state-` + game.level].genre;
  let countRightAnswers = 0;
  let arr = [];

  [...checkboxesAnswers].forEach((item) => {
    if (item.value.toLowerCase() === rightAnswer.toLowerCase()) {
      countRightAnswers++;
    }
    return countRightAnswers;
  });

  answersContainer.addEventListener(`change`, () => {
    const answersArr = [];
    [...checkboxesAnswers].forEach((item) => {
      if (item.checked) {
        answersArr.push(item);
      }
    });

    sendButton.disabled = !(answersArr.length > 0);
    arr = answersArr;

  });

  sendButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (arr.length > 0) {
      let count = 0;
      arr.forEach((item) => {
        if (item.value.toLowerCase() === rightAnswer.toLowerCase()) {
          count++;
        }
        return count;
      });

      if (countRightAnswers === count) {
        stats.push(35);
        gameStack.push(game);
        game = setNextLevel(game);
        setScreen(game);
      } else {
        if (game.lives <= 0) {
          game.level = `fail`;
          game.points = getPoints(stats, game.lives);
          setScreen(game);
        } else {
          game = setLives(game, game.lives - 1);
          setScreen(game);
        }
      }
    }
  });

  return lvlGenreScreen;
};

export default lvlGenreTemplate;
