import welcomeScreen from './welcome/welcome.js';
import {defaultState} from './data/data.js';
import GameScreen from './game/game.js';
import ResultScreen from './result/resultScreen.js';
import Loader from './loader.js';
import adaptData from './data/data-adapter.js';


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
    const stringTime = game.time.toString().length === 3 ? game.time : `${new Array(3 - game.time.toString().length).fill(`0`).join(``)}${game.time}`;
    const stringPoints = game.points.toString().length === 2 ? game.points : `0${game.points}`;

    return `${game.lives}${stringLevel}${stringTime}${stringPoints}`;
  } else {
    return JSON.stringify(game);
  }
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
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static changeLevel(game = defaultState) {
    // Application.routes[ControllerID.GAME].init(game);
    location.hash = `${ControllerID.GAME}?${saveGame(game)}`;
  }

  static gameOver(game) {
    Application.routes[ControllerID.SCORE] = new ResultScreen(game);
    Application.routes[ControllerID.SCORE].init();
    location.hash = `${ControllerID.SCORE}?${saveGame(game)}`;
  }
}

Loader.load()
    .then(adaptData)
    .then((gameData) => Application.init(gameData))
    .catch(window.console.error);
