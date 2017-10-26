import {Result} from './data/Constants.js';
import changeLevel from './game/game.js';

const setGameOver = ({detail: gameDetail}) => {
  const level = changeLevel(gameDetail);
  level.onAnswer(Result.FAIL);
};

export default () => {
  document.removeEventListener(`gameover`, setGameOver);
  document.addEventListener(`gameover`, setGameOver);
};
