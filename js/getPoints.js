const MAX_LIVES = 3;

const getPoints = (answersArray, lives) => {
  const answers = answersArray.slice();
  let points = 0;
  if (answers.length === 10) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] <= 30) {
        points += 2;
      } else {
        points += 1;
      }
    }

    if (lives >= 0 && lives < MAX_LIVES) {
      points -= (MAX_LIVES - lives) * 2;
    }

    if (lives < 0) {
      points = -1;
    }
  } else {
    points = -1;
  }

  return points;
};

export default getPoints;
