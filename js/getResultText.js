import {MAX_LIVES, FailResultText} from './data/Constants.js';
import {getTime, getDeclension} from './data/data.js';

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

    if (currentResult.lives <= 0) {
      resultText = FailResultText.TRY_FAIL;
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

    const fails = MAX_LIVES - currentResult.lives;

    if (currentResult.time <= 0) {
      resultText = FailResultText.TIME_FAIL;
    } else {
      const minutes = +getTime(currentResult.time, `min`);
      const seconds = +getTime(currentResult.time, `sec`);
      const minuteWord = getDeclension(minutes, `минуту`, `минуты`, `минут`);
      const secondsWord = getDeclension(seconds, `секунду`, `секунды`, `секунд`);
      const pointsWord = getDeclension(currentResult.points, `балл`, `балла`, `баллов`);
      const failsWord = getDeclension(fails, `ошибку`, `ошибки`, `ошибок`);

      resultText = {
        title: `Вы настоящий меломан!`,
        stat: `За ${minutes} ${minuteWord} и ${seconds} ${secondsWord}
    <br>вы набрали ${currentResult.points} ${pointsWord}
    <br>совершив ${fails} ${failsWord}`,
        comparison: `Вы заняли ${place}-${placeTextEnd}е место из ${stats.length} игрок${playersTextEnd}. Это лучше чем у ${percent}% игроков`,
        button: `Сыграть ещё раз`
      };
    }
  }

  return resultText;
};

export default getResultText;
