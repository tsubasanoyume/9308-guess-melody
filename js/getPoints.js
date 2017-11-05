import {MAX_LIVES, ANSWERS_ARRAY_LENGTH, AnswersPoint, LIMIT_FAST_ANSWER} from './data/Constants.js';

const getPoints = (answersArray, lives) => {
  const answers = answersArray.slice();
  let points = 0;
  if (answers.length === ANSWERS_ARRAY_LENGTH) {
    for (const answer of answers) {
      points += (answer <= LIMIT_FAST_ANSWER) ? AnswersPoint.ANSWER_FAST : AnswersPoint.ANSWER_SLOW;
    }

    if (lives >= 0 && lives < MAX_LIVES) {
      points -= (MAX_LIVES - lives) * AnswersPoint.ANSWER_DIE;
    }

    if (lives < 0) {
      points = AnswersPoint.ANSWER_FAIL;
    }
  } else {
    points = AnswersPoint.ANSWER_FAIL;
  }

  return points;
};

export default getPoints;
