import setScreen from './setScreen.js';
import setTemplateToNode from './getElement.js';
import {levels, stats, setNextLevel, setLives, gameStack} from './data/data.js';
import getHeader from './header.js';
import getPoints from './getPoints.js';
import {TEMP_ANSWER_TIME} from './data/Constants.js';

const answerNode = (answers) => `${[...answers].map((answer, i) => `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="${answer.isRight}"/>
            <label class="main-answer" for="answer-${i + 1}">
              <img class="main-answer-preview" src="${answer.imageSRC}"
                   alt="${answer.nameArtist}" width="134" height="134">
              ${answer.nameArtist}
            </label>
          </div>`).join(``)}`;

const lvlArtistTemplate = (game) => {
  const temp = `<section class="main main--level main--level-artist">

    ${getHeader(game)}

    <div class="main-wrap">
      <h2 class="title main-title">${levels[`state-` + game.level].question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levels[`state-` + game.level].srcAudio}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
       ${answerNode(levels[`state-` + game.level].answers)}
      </form>
    </div>
  </section>`;

  const lvlArtistScreen = setTemplateToNode(temp);

  const radioButtons = lvlArtistScreen.querySelectorAll(`.main-answer-r`);

  [...radioButtons].forEach((item) => {
    item.addEventListener(`change`, (e) => {
      e.preventDefault();
      if (item.checked) {
        switch (item.value) {
          case `true`: {
            stats.push(TEMP_ANSWER_TIME);
            gameStack.push(game);
            game = setNextLevel(game);
            break;
          }
          case `false`: {
            if (game.lives <= 0 || game.time <= 0) {
              game.level = `fail`;
              game.points = getPoints(stats, game.lives);
            } else {
              game = setLives(game, game.lives - 1);
            }
          }
        }

        setScreen(game);
      }
    });
  });

  return lvlArtistScreen;
};

export default lvlArtistTemplate;
