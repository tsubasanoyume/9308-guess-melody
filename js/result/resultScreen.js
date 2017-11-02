import ResultScreenView from './resultScreen-view.js';
import setScreen from '../setScreen.js';
import {stats} from '../data/data.js';
import App from '../application.js';
import Loader from '../loader.js';

class ResultScreen {
  constructor(game) {
    this.game = game;
    this.view = new ResultScreenView(game);
  }

  init() {
    if (this.game.points >= 0 && this.game.time > 0 && stats.length === 10) {
      Loader.loadResult().then((score) => {
        this.view = new ResultScreenView(this.game, score);
        setScreen(this.view);
        return this.view;
      });
    } else {
      setScreen(this.view);
    }

    this.view.onRepeat = () => {
      stats.length = 0;
      App.showWelcome();
    };
  }
}

export default ResultScreen;
