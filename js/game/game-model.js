import {levels, setLives, setTime, stats, setNextLevel} from '../data/data.js';
import getPoints from '../getPoints.js';
import getTimer from '../getTimer.js';

export default class GameModel {
  constructor(data = levels) {
    this.data = data;
  }

  update(newGame) {
    this.game = newGame;
    return this.game;
  }

  setTimer() {
    this.timer = getTimer(this.game.time, this.game);
    return this.timer;
  }

  setGameTime() {
    this.update(setTime(this.game, this.timer.getCurrentTimer()));
  }

  getAnswerTime() {
    this.answerTime = this.timer.getCurrentTimer();
    return this.answerTime;
  }

  setStat(answer) {
    stats.push(answer);
  }

  die() {
    this.update(setLives(this.game, this.game.lives - 1));
  }

  nextLevel() {
    this.update(setNextLevel(this.game));
  }

  getGamePoints() {
    this.game.points = getPoints(stats, this.game.lives);
  }
}
