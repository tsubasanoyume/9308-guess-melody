import welcomeScreen from './welcome/welcome.js';
import {stats} from './data/data.js';
import GameScreen from './game/game.js';
import ResultScreen from './result/resultScreen.js';
import Loader from './loader.js';
import adaptData from './data/data-adapter.js';
import {audioArray, defaultState, ANSWERS_ARRAY_LENGTH, LENGTH_DECODE_TIME_HASH} from './data/Constants.js';
import preload from './preload.js';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  SCORE: `score`
};

const loadGame = (data) => {
  if (data) {
    data = `{"lives": ${data.substr(0, 1)}, "level":${+data.substr(1, 2)}, "time": ${+data.substr(3, 3)}, "points": ${+data.substr(6)}}`;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultState;
  }
};

const saveGame = (game) => {
  if (game) {
    const stringLevel = game.level.toString().length === 2 ? game.level : `0${game.level}`;
    const stringTime = game.time.toString().length === LENGTH_DECODE_TIME_HASH ? game.time : `${new Array(LENGTH_DECODE_TIME_HASH - game.time.toString().length).fill(`0`).join(``)}${game.time}`;
    const stringPoints = game.points.toString().length === 2 ? game.points : `0${game.points}`;

    return `${game.lives}${stringLevel}${stringTime}${stringPoints}`;
  } else {
    return JSON.stringify(game);
  }
};

const loadData = () => {
  Loader.load()
      .then(adaptData)
      .then((gameData) => Application.init(gameData))
      .then(() => audioArray.map((item) => preload(item)))
      .then((songPromises) => Promise.all(songPromises))
      .then(() => {
        welcomeScreen.onPlay();
      })
      .catch(window.console.error);
};

export default class Application {
  static init(gameData) {
    Application.routes = {
      [ControllerID.WELCOME]: welcomeScreen,
      [ControllerID.GAME]: new GameScreen(gameData),
      [ControllerID.SCORE]: ``
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      Application.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, hashChangeHandler);
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    loadData();
    location.hash = ControllerID.WELCOME;
  }

  static changeLevel(game = defaultState) {
    location.hash = `${ControllerID.GAME}?${saveGame(game)}`;
  }

  static gameOver(game) {
    if (game.points >= 0 && game.time > 0 && stats.length === ANSWERS_ARRAY_LENGTH) {
      Loader.saveResult({answers: stats, lives: game.lives});
    }
    Application.routes[ControllerID.SCORE] = new ResultScreen(game);
    Application.routes[ControllerID.SCORE].init();
    location.hash = `${ControllerID.SCORE}?${saveGame(game)}`;
  }
}

loadData();
