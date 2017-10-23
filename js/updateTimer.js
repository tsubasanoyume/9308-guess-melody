import {getTime} from './data/data.js';

export const updateTime = (time) => {
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
