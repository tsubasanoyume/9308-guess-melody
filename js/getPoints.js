import {MAX_LIVES} from './data/Constants.js';

const getPoints = (answersArray, lives) => {
  const answers = answersArray.slice();
  let points = 0;
  if (answers.length === 10) {
    for (let i = 0; i < answers.length; i++) {
      points += (answers[i] <= 30) ? 2 : 1;
    }

    if (lives >= 1 && lives < MAX_LIVES) {
      points -= (MAX_LIVES - lives) * 2;
    }

    if (lives === 0) {
      points = -1;
    }
  } else {
    points = -1;
  }

  return points;
};

export default getPoints;
