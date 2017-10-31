import LevelGenreView from './levels/levelGenre-view.js';
import LevelArtistView from './levels/levelArtist-view.js';
import {levels, defaultState} from '../data/data.js';
import {Result} from '../data/Constants.js';
import setScreen from '../setScreen.js';
import gameOver from '../timer-listener.js';
import GameModel from './game-model.js';
import App from '../application.js';

export default class GameScreen {
  constructor(data = levels) {
    this.model = new GameModel(data);
  }

  init(game = defaultState) {
    this.model.update(game);
    this.model.setTimer(game.time);

    this.model.timer.start();

    this.view = this.getLevelType(this.model.game);

    this.view.onAnswer = (answer) => this.onAnswer(answer);

    gameOver();

    setScreen(this.view);
  }

  getLevelType(game) {
    let level = new LevelGenreView(game, game.level);

    if (levels[`state-` + game.level].type === `artist`) {
      level = new LevelArtistView(game, game.level);
    }

    return level;
  }

  onAnswer(answer) {
    this.model.timer.stop();

    switch (answer) {
      case Result.DIE: {
        this.model.die();
        this.model.setGameTime();
        App.changeLevel(this.model.game);
        break;
      }
      case Result.FAIL: {
        App.gameOver(this.model.game);
        break;
      }
      case Result.WIN: {
        const startLevelTime = this.model.game.time;
        this.model.setGameTime();

        this.model.setStat(startLevelTime - this.model.getAnswerTime());
        this.model.getGamePoints();

        App.gameOver(this.model.game);
        break;
      }
      case Result.NEXT: {
        const startLevelTime = this.model.game.time;
        this.model.setGameTime();

        this.model.setStat(startLevelTime - this.model.getAnswerTime());

        this.model.nextLevel();
        App.changeLevel(this.model.game);
        break;
      }
    }
  }
}
