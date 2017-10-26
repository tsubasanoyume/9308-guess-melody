import {getTime, getRadius} from './data/data.js';
import {GAME_TIME} from './data/Constants.js';

export const updateTime = (time) => {
  const minutesNode = document.querySelector(`.timer-value-mins`);
  const secondsNode = document.querySelector(`.timer-value-secs`);
  const timerNode = document.querySelector(`.timer-value`);
  const timeIndicator = document.querySelector(`.timer-line`);

  if (minutesNode && secondsNode) {
    minutesNode.innerHTML = ``;
    secondsNode.innerHTML = ``;

    minutesNode.innerHTML = getTime(time, `min`);
    secondsNode.innerHTML = getTime(time, `sec`);
  }

  if (time <= 30 && timerNode) {
    timerNode.classList.add(`timer-value--finished`);
  }

  if (timeIndicator) {
    const ratio = time / GAME_TIME;
    const radius = +timeIndicator.getAttribute(`r`);
    const parametersStroke = getRadius(ratio, radius);

    timeIndicator.setAttribute(`stroke-dasharray`, `${parametersStroke.stroke} ${parametersStroke.offset}`);
  }
};
