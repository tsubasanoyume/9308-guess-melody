import App from './application.js';
import {setTime} from './data/data.js';

const setGameOver = ({detail: gameDetail}) => {
  const game = setTime(gameDetail[`gameDetail`], 0);
  App.gameOver(game);
};

export default () => {
  document.removeEventListener(`gameover`, setGameOver);
  document.addEventListener(`gameover`, setGameOver);
};
