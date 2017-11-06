import {MINUTE_IN_SECOND} from './Constants.js';

export const stats = [];

export const statistics = [];

export const getLevel = (game, data) => {
  return data[`state-${game.level}`] || false;
};

export const setNextLevel = (game) => {
  game = Object.assign({}, game);
  game.level += 1;

  return game;
};

export const setLives = (game, lives) => {
  game = Object.assign({}, game);
  game.lives = lives;

  return game;
};

export const getTime = (time, type) => {
  const value = type === `min` ? Math.trunc(time / MINUTE_IN_SECOND) : Math.trunc(time % MINUTE_IN_SECOND);

  return value.toString().length > 1 ? value : `0${value}`;
};

export const setTime = (game, time) => {
  game = Object.assign({}, game);
  game.time = time;

  return game;
};

export const getRadius = (ratio, radius) => {
  const circleLength = Math.round(2 * Math.PI * radius);
  const leftStroke = Math.round(circleLength * ratio);
  const offsetLength = circleLength - leftStroke;

  return {
    stroke: leftStroke,
    offset: offsetLength
  };
};

export const getDeclension = (num, nominative, genitiveSingular, genitivePlural) => {
  let wordDecline;
  if (num > 10 && (Math.round((num % 100) / 10)) === 1) {
    return genitivePlural;
  } else {
    switch (num % 10) {
      case 1:
        wordDecline = nominative;
        break;
      case 2:
      case 3:
      case 4:
        wordDecline = genitiveSingular;
        break;
      default:
        wordDecline = genitivePlural;
        break;
    }
  }
  return wordDecline;
};
