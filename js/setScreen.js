import lvlArtistScreen from './levelArtist.js';
import lvlGenreScreen from './levelGenre.js';
import resultScreen from './resultScreen.js';
import welcomeScreen from './welcome.js';
import {levels, stats} from './data/data.js';
import getPoints from './getPoints.js';

const screens = {
  'artist': lvlArtistScreen,
  'genre': lvlGenreScreen
};

const mainNode = document.querySelector(`.main`);

const setScreen = (game) => {
  mainNode.innerHTML = ``;
  if (game.level === 0) {
    mainNode.appendChild(welcomeScreen);
  } else if (game.level === `fail`) {
    mainNode.appendChild(resultScreen(game, stats));
  } else {
    if (levels[`state-` + game.level]) {
      const level = levels[`state-` + game.level];
      const screen = screens[level.type];

      mainNode.appendChild(screen(game));
    } else {
      game.points = getPoints(stats, game.lives);
      mainNode.appendChild(resultScreen(game, stats));
    }
  }
};

export default setScreen;
