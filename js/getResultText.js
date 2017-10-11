const getResultText = (allPlayersResults, currentPlayerResult) => {
  const stats = allPlayersResults.slice();
  const currentResult = Object.assign({}, currentPlayerResult);
  let resultText = ``;
  let placeInStats = 0;
  let percent = 0;
  let place = 0;
  let placeTextEnd = `о`;
  let playersTextEnd = `ов`;
  if (currentResult.points < 0) {
    if (currentResult.lives < 0) {
      resultText = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    } else if (currentResult.time < 0) {
      resultText = `Время вышло! Вы не успели отгадать все мелодии`;
    }
  } else {
    stats.push(currentResult.points);

    stats.sort((a, b) => {
      return a - b;
    });

    stats.reduce((prev, cur, index) => {
      if (cur === currentResult.points) {
        placeInStats = index;
      }
    });

    percent = (placeInStats / stats.length).toFixed(1) * 100;

    if (stats.length === 1) {
      percent = 100;
      playersTextEnd = `а`;
    }

    place = stats.length - placeInStats;

    if (place === 3 || (place % 10 === 3 && place !== 13)) {
      placeTextEnd = `ь`;
    }

    resultText = `Вы заняли ${place}-${placeTextEnd}е место из ${stats.length} игрок${playersTextEnd}. Это лучше чем у ${percent}% игроков`;
  }

  return resultText;
};

export default getResultText;
