import App from './application.js';

const setGameOver = ({detail: gameDetail}) => {
  gameDetail.time = 0;
  App.gameOver(gameDetail);
};

export default () => {
  document.removeEventListener(`gameover`, setGameOver);
  document.addEventListener(`gameover`, setGameOver);
};
