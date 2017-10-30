import welcomeScreen from './welcome/welcome.js';
import {defaultState} from './data/data.js';
import GameScreen from './game/game.js';
import ResultScreen from './result/resultScreen.js';


const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  SCORE: `score`
};

const routes = {
  [ControllerID.WELCOME]: welcomeScreen,
  [ControllerID.GAME]: ``,
  [ControllerID.SCORE]: ``
};

const loadGame = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultState;
  }
};

const saveGame = (game) => {
  return JSON.stringify(game);
};

export default class Application {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static startGame(game = defaultState) {
    routes[ControllerID.GAME] = new GameScreen();
    location.hash = `${ControllerID.GAME}?${saveGame(game)}`;
  }

  static gameOver(game) {
    routes[ControllerID.SCORE] = new ResultScreen(game);
    location.hash = `${ControllerID.SCORE}?${saveGame(game)}`;
  }
}

Application.init();
