import ResultScreenView from './resultScreen-view.js';
import setScreen from '../setScreen.js';
import {stats} from '../data/data.js';
import App from '../application.js';

class ResultScreen {
  constructor(game) {
    this.game = game;
    this.view = new ResultScreenView(game);
  }

  init() {
    this.view.onRepeat = () => {
      stats.length = 0;
      App.showWelcome();
    };

    setScreen(this.view);
  }
}

export default ResultScreen;
