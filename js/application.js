import welcomeScreen from './welcome/welcome.js';
import {defaultState} from './data/data.js';
import gameScreen from './game/game.js';
import ResultScreen from './result/resultScreen.js';

export default class Application {

  static showWelcome() {
    welcomeScreen.init();
  }

  static startGame(game = defaultState) {
    gameScreen.init(game);
  }

  static gameOver(game) {
    const resultScreen = new ResultScreen(game);
    resultScreen.init(game);
  }
}
