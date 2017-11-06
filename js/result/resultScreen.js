import ResultScreenView from './resultScreen-view.js';
import setScreen from '../setScreen.js';
import getPoints from '../getPoints.js';
import {stats, statistics} from '../data/data.js';
import {ANSWERS_ARRAY_LENGTH} from '../data/Constants.js';
import App from '../application.js';
import Loader from '../loader.js';

class ResultScreen {
  constructor(game) {
    this.game = game;
    this.view = new ResultScreenView(game);
  }

  init() {
    if (this.game.points >= 0 && this.game.time > 0 && stats.length === ANSWERS_ARRAY_LENGTH) {
      Loader.loadResult().then((score) => {
        for (const userStats of score) {
          if (!Array.isArray(userStats)) {
            statistics.push(getPoints(userStats.answers, userStats.lives));
          }
        }

        this.view = new ResultScreenView(this.game, statistics);

        return this.view;
      });
    }

    this.view.onRepeat = () => {
      stats.length = 0;
      App.showWelcome();
    };

    setScreen(this.view);
  }
}

export default ResultScreen;
