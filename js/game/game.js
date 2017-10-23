import LevelArtistView from './levels/levelArtist-view.js';
import LevelGenreView from './levels/levelGenre-view.js';
import result from '../result/resultScreen.js';
import showWelcome from '../welcome/welcome.js';
import {levels, stats, defaultState, setLives, setNextLevel, setTime} from '../data/data.js';
import {Result} from '../data/Constants.js';
import getPoints from '../getPoints.js';
import setScreen from '../setScreen.js';
import getTimer from '../getTimer.js';
import gameOver from '../timer-listener.js';

const changeLevel = (game) => {
  let level = new LevelGenreView(game, game.level);

  if (levels[`state-` + game.level].type === `artist`) {
    level = new LevelArtistView(game, game.level);
  }

  const timer = getTimer(game.time, game);
  timer.start();
  const startLevelTime = timer.getCurrentTimer();

  gameOver();

  level.onAnswer = (answer) => {
    timer.stop();

    switch (answer) {
      case Result.DIE: {
        game = setTime(game, timer.getCurrentTimer());
        setScreen(changeLevel(setLives(game, game.lives - 1)));
        break;
      }
      case Result.FAIL: {
        game = setTime(game, 0);
        const failScreen = result(game);
        failScreen.onRepeat = () => {
          setScreen(showWelcome());
        };
        setScreen(failScreen);
        break;
      }
      case Result.WIN: {
        game = setTime(game, timer.getCurrentTimer());

        const levelTime = startLevelTime - game.time;
        stats.push(levelTime);

        const winScreen = result(game);
        winScreen.onRepeat = () => {
          setScreen(showWelcome());
        };
        game.points = getPoints(stats, game.lives);
        setScreen(winScreen);
        break;
      }
      case Result.NEXT: {
        game = setTime(game, timer.getCurrentTimer());

        const levelTime = startLevelTime - game.time;
        stats.push(levelTime);

        setScreen(changeLevel(setNextLevel(game)));
        break;
      }
      default: {
        setScreen(changeLevel(game));
      }
    }
  };
  return level;
};

export default () => changeLevel(defaultState);
