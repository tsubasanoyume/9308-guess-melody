import {getTime, setTime} from './data/data.js';
import result from './result/resultScreen.js';
import setScreen from './setScreen.js';
import showWelcome from './welcome/welcome.js';

const getTimer = (val, game) => {
  let timer = null;

  return {
    value: val,
    tick() {
      return --this.value;
    },
    start() {
      timer = setInterval(() => {
        if (this.value > 0) {
          this.tick();
          updateTime(this.value);
        } else {
          this.reset();
          setGameOver(game);
        }
      }, 1000);
    },
    stop() {
      clearInterval(timer);
    },
    reset() {
      this.value = 0;
      clearInterval(timer);
    },
    getCurrentTimer() {
      return this.value;
    }
  };
};

const updateTime = (time) => {
  const minutesNode = document.querySelector(`.timer-value-mins`);
  const secondsNode = document.querySelector(`.timer-value-secs`);
  const timerNode = document.querySelector(`.timer-value`);

  if (minutesNode && secondsNode) {
    minutesNode.innerHTML = ``;
    secondsNode.innerHTML = ``;

    minutesNode.innerHTML = getTime(time, `min`);
    secondsNode.innerHTML = getTime(time, `sec`);
  }

  if (time < 30 && timerNode) {
    timerNode.classList.add(`timer-value--finished`);
  }
};

const setGameOver = (game) => {
  game = setTime(game, 0);
  const gameOverScreen = result(game);
  gameOverScreen.onRepeat = () => {
    setScreen(showWelcome());
  };
  setScreen(gameOverScreen);
};

export default getTimer;
